import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';


// import our main App component
import App from '../../src/App';


// import the manifest generated with the create-react-app build
import manifest from './../../build/asset-manifest.json';

// function to extract js assets from the manifest
const extractJsAssets = (assets, chunks) => Object.keys(assets)
  .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
  .map(k => assets[k]);

const extractCssAssets = (assets, chunks) => Object.keys(assets)
  .filter(asset => chunks.indexOf(asset.replace('.css', '')) > -1)
  .map(k => assets[k]);


const path = require("path");
const fs = require("fs");


export default (store) => (req, res, next) => {
  // get the html file created with the create-react-app build
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    const modules = [];
    const routerContext = {};

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <ReduxProvider store={store}>
          <StaticRouter location={req.baseUrl} context={routerContext}>
            <App />
          </StaticRouter>
        </ReduxProvider>
      </Loadable.Capture>
    );

    // console.log(modules)

    // get the stringified state
    const reduxState = JSON.stringify(store.getState());

    // map required assets to script tags
    const extraJsChunks = extractJsAssets(manifest.files, modules)
      .map(c => `<script custom type="text/javascript" src="${c}"></script>`)
      .join('\n');

    const extraCssChunks = extractCssAssets(manifest.files, modules)
      .map(c => `<link rel="stylesheet" type="text/css" href="${c}"></link>`)
      .join('\n');

    // get HTML headers
    const helmet = Helmet.renderStatic();

    // now inject the rendered app into our html and send it to the client
    return res.send(
      htmlData
        // write the React app
        .replace('<div id="root"></div>', `<div id="root">${html}</div> ${extraCssChunks + extraJsChunks}`)
        // write the string version of our state
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        // write the HTML header tags
        .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
    );
  });
}