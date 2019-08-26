import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import i18next from 'i18next'
import middleware from 'i18next-express-middleware'
import FilesystemBackend from 'i18next-node-fs-backend'
import path from 'path'

import indexController from './controllers/index';

const PORT = 3005;

i18next
  .use(FilesystemBackend)
  .init({
    fallbackLng: 'en',
    // debug: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: path.resolve(__dirname, `../public/locales/{{lng}}/{{ns}}.json`),
    },

    react: {
      useSuspense: false,
    }
    
  });


const app = express();

app.use(
  middleware.handle(i18next)
);

app.use(compression())
app.use(cookieParser())
app.use(indexController)
app.disable('x-powered-by')

// start the app
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});
