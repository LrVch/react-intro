import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
// import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Loadable from 'react-loadable'
import mainEpics$ from './store/epics'
import i18n from "i18next";

import './i18n';

const { REACT_APP_SERVER_RENDER: isServer } = process.env

const { store, epicMiddleware } = configureStore(window.__REDUX_STATE__ || {})

epicMiddleware.run(mainEpics$)

if (typeof window.__i18n_INIT_LANG__ === 'string') {
  i18n.changeLanguage(window.__i18n_INIT_LANG__)
}

if (Object.keys(window.__i18n_INIT_STATE__).length) {
  i18n.services.resourceStore.data = window.__i18n_INIT_STATE__
}

const AppBundle = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

if (!isServer) {
  ReactDOM.render(
    AppBundle,
    document.getElementById('root')
  );
} else {
  window.onload = () => {
    Loadable.preloadReady().then(() => {
      ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
      );
    });
  };
}

delete window.__REDUX_STATE__
delete window.__i18n_INIT_STATE__
delete window.__i18n_INIT_LANG__

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
