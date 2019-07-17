import Axios from 'axios-observable'
import ErrorNotifyService from './services/errorNotify.service';

export const burger = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.com'
})

export const error = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.com'
})

export const testError = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.comw'
})


// burger.defaults.headers.common['some_interesting_header'] = 'value'

burger.axiosInstance.interceptors.request.use(request => {
  // console.log(request)

  return request
}, error => {
  return Promise.reject(error)
})

burger.axiosInstance.interceptors.response.use(response => {
  // console.log(response)

  return response
}, error => {
  if (error.constructor.name !== 'Cancel') {
    ErrorNotifyService.sendNetworkErrors(error)
  }
  return Promise.reject(error)
})