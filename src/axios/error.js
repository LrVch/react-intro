import Axios from 'axios-observable'
import { BASE_URL } from '../config'

export const error = Axios.create({
  baseURL: BASE_URL
})