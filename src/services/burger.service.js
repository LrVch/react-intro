import { burger } from '../axios'
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

  static getOrders(retryCount = 0) {
    return burger.get('/orders.json').pipe(
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

  static authenticate(type, credentials, retryCount = 0) {
    const route = type === 'login' ? '/login' : '';
    return burger
      .post(this.BASE_URL_USERS + route, { user: credentials })
      .pipe(
        retry(retryCount),
        // map(data => {
        //   return data.user;
        // })
      );
  }
}

export default BurgerService