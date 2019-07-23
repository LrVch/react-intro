import { burger } from '../axios/burger'
import { pluck, retry } from 'rxjs/operators'

class BurgerService {
  static getFormConfig(retryCount = 0) {
    return burger.get('/formConfig.json').pipe(
      retry(retryCount),
      pluck('data'),
    )
  }

  static getIngredients(retryCount = 0) {
    return burger.get('/ingredients.json').pipe(
      retry(retryCount),
      pluck('data')
    )
  }

  static getPrice(retryCount = 0) {
    return burger.get('/price.json').pipe(
      retry(retryCount),
      pluck('data')
    )
  }

  static getOrders(localId, retryCount = 0) {
    return burger.get('/orders.json', {
      params: {
        orderBy: 'localId',
        equalTo: localId
      },
      paramsSerializer: function (params) {
        const p = Object.entries(params)
          .map(x => {
            if (x[0] === 'auth') {
              return `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`
            } else {
              return `${encodeURIComponent(x[0])}=${typeof x[1] === 'string' ? `"${x[1]}"` : x[1]}`
            }
          })
          .join('&');
        return p
      },
    }).pipe(
      retry(retryCount),
      pluck('data'),
    )
  }

  static sendOrder(order, retryCount = 0) {
    return burger.post('/orders.json', order).pipe(
      retry(retryCount),
      pluck('data'),
    )
  }
}

export default BurgerService