import Axios from 'axios-observable'
import ErrorNotifyService from '../services/errorNotify.service';
import store from '../configureStore';
import { authLogout } from '../store/actions';
import LocalStorageService from '../services/localStorage.service';

export const burger = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.com'
})

burger.axiosInstance.interceptors.request.use(config => {
  const token =  LocalStorageService.getToken()

  if (token) {
    config.params = {
      ...config.params,
      auth: token
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

burger.axiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.constructor.name !== 'Cancel') {
    ErrorNotifyService.sendNetworkErrors(error)

    if (error.response.status === 401) {
      store.dispatch(authLogout())
    }
  }
  return Promise.reject(error)
})