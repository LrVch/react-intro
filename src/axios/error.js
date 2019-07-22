import Axios from 'axios-observable'

export const error = Axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.com'
})