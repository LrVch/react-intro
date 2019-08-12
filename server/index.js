import Loadable from 'react-loadable';
import express from 'express';

import indexController from './controllers/index';

const PORT = 3004;

// const { REACT_APP_SERVER_RENDER, NODE_ENV } = process.env
// console.log(NODE_ENV)
// console.log(REACT_APP_SERVER_RENDER)

// initialize the application and create the routes
const app = express();

app.use(indexController);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});