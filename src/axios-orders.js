import axios from 'axios'

const orders = axios.create({
  baseURL: 'https://burger-builder-super.firebaseio.com/'
})

export default orders

