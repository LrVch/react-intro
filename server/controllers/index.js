import express from "express";

import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/configureStore';
import * as authActions from '../../src/store/actions/auth'

const router = express.Router();
const path = require("path");


const actionIndex = (req, res, next) => {
  const { store } = configureStore();

  if (req.cookies.au) {
    store.dispatch(authActions.authServerIsFullLogged())
  }

  serverRenderer(store)(req, res, next);
};


// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', '..', 'build'),
  { maxAge: '30d' },
));

// any other route should be handled by react-router, so serve the index page
router.use('*', actionIndex);


export default router;