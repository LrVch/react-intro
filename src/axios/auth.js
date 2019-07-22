import Axios from 'axios-observable'
import ErrorNotifyService from '../services/errorNotify.service';
import store from '../configureStore'
import { authLogout } from '../store/actions';

export const auth = Axios.create()

auth.axiosInstance.interceptors.response.use(response => {
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