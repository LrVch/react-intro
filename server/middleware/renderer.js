import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
// import { getBundles } from 'react-loadable/webpack';
// import stats from './../../build/react-loadable.json';



// import our main App component
import App from '../../src/App';


// import the manifest generated with the create-react-app build
import manifest from './../../build/asset-manifest.json';

// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
  .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
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

    console.log(modules)

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

    // console.log(modules);
    // console.log(manifest)
    // get the stringified state
    const reduxState = JSON.stringify(store.getState());

    // let bundles = getBundles(stats, modules);

    // console.log(bundles);

    // map required assets to script tags
    const extraChunks = extractAssets(manifest.files, modules)
      .map(c => `<script type="text/javascript" src="${c}"></script>`);

    // const extraChunks = bundles.map(bundle => {
    //     return `<script src="/dist/${bundle.file}"></script>`
    // }).join('\n')

    // console.log(extraChunks)


    // get HTML headers
    const helmet = Helmet.renderStatic();

    // now inject the rendered app into our html and send it to the client
    return res.send(
      htmlData
        // write the React app
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        // write the string version of our state
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        // append the extra js assets
        .replace('</body>', extraChunks + '</body>')
        // write the HTML header tags
        .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
    );
  });
}