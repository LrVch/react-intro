import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
// import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore, { epicMiddleware } from './configureStore'
import Loadable from 'react-loadable';
import mainEpics$ from './store/epics'

const { REACT_APP_SERVER_RENDER: isServer } = process.env

const store = configureStore(window.__REDUX_STATE__ || {})

epicMiddleware.run(mainEpics$)

delete window.__REDUX_STATE__

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
  // window.onload = () => {
    Loadable.preloadReady().then(() => {
      console.log('preloaded loadable')
      ReactDOM.hydrate(
        AppBundle,
        document.getElementById('root')
      );
    });
  // };
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
