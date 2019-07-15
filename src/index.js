import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import burgerReducer from './store/reducers'
// import orders from './axios-orders';

const ingredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
}

const totalPrice = 4

const resetState = {
  ingredients: { ...ingredients },
  totalPrice,
  loadingIgredients: false,
  errorLoadingIngredints: false,
}

const initState = {
  burger: {
    ...resetState,
    orderForm: {},
    loadingFormConfig: false,
    resetState
  }
}

// orders.get('/ingredients.json')
//   .then(({ data: ingredients }) => {

//   })
//   .catch(error => {
//     this.setState({ error: error })
//   })

const store = createStore(
  burgerReducer,
  initState,
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
