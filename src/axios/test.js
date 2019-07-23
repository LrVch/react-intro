import Axios from 'axios-observable'
import { BASE_URL } from '../config'


export const testError = Axios.create({
  baseURL: BASE_URL + 'error'
})