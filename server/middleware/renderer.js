import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';
import path from 'path'
import fs from 'fs'


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

export default (store) => async (req, res) => {
  const language = req.cookies.lang || 'en'

  await req.i18n.loadLanguages(language)

  req.i18n.changeLanguage(language);

  const i18nState = {}
  i18nState[language] = req.i18n.services.resourceStore.data[language];

  // console.log(i18nState)
  // console.log('req.i18n', req.i18n.options)


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
            <I18nextProvider i18n={req.i18n}>
              <App />
            </I18nextProvider>
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
        .replace('<div id="root"></div>', `<div id="root">${html}</div> ${extraCssChunks + extraJsChunks}`)
        .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
        .replace('__i18n_INIT_STATE__={}', `__i18n_INIT_STATE__=${JSON.stringify(i18nState)}`)
        .replace('__i18n_INIT_LANG__={}', `__i18n_INIT_LANG__='${language}'`)
        .replace('<title></title>', helmet.title.toString() + helmet.meta.toString())
    );
  });
}