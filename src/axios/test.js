import Axios from 'axios-observable'

export const testError = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.comw'
})