import { error } from '../axios/error'
import { retry } from 'rxjs/operators'

const retryCount = 2;

class ErrorNotifyService {

  static sendNetworkErrorDetails(e) {
    error.post(
      '/app-network-errors.json',
      {
        ...e,
        date: new Date()
      }
    ).pipe(
      retry(retryCount)
    ).subscribe()
  }

  static sendErrorDetails(e) {
    error.post(
      '/app-errors.json',
      {
        ...e,
        date: new Date()
      }
    ).pipe(
      retry(retryCount)
    ).subscribe()
  }

  static sendNetworkErrors(e) {
    error.post(
      '/network-errors.json',
      {
        error: e,
        date: new Date()
      }
    ).pipe(
      retry(retryCount)
    ).subscribe()
  }
}

export default ErrorNotifyService