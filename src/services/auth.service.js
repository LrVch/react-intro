import { auth } from '../axios/auth'
import { pluck, retry, tap } from 'rxjs/operators'

const apiKey = 'AIzaSyBrNJ4UAfTpuqEF9XgQ4XLH3sKROZJzmbI'
const baseUrl = method => `https://identitytoolkit.googleapis.com/v1/accounts:${method}?key=${apiKey}`
const tokenUrl = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`

// sign up
// curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' \
// -H 'Content-Type: application/json' \
// --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'

// sign in
// curl 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]' \
// -H 'Content-Type: application/json' \
// --data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'

// refresh token
// curl 'https://securetoken.googleapis.com/v1/token?key=[API_KEY]' \
// -H 'Content-Type: application/x-www-form-urlencoded' \
// --data 'grant_type=refresh_token&refresh_token=[REFRESH_TOKEN]'

// user data
// curl 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]' \
// -H 'Content-Type: application/json' --data-binary '{"idToken":"[FIREBASE_ID_TOKEN]"}'

const transformRequest = (jsonData = {}) =>
  Object.entries(jsonData)
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&');

class AuthService {
  static authenticate(authType, credentials, retryCount = 0) {
    const route = authType === '/login' ? 'signInWithPassword' : 'signUp'
    return auth.post(baseUrl(route),
      {
        ...credentials,
        returnSecureToken: true
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }).pipe(
        retry(retryCount),
        pluck('data'),
      )
  }

  static refreshToken(token, retryCount = 0) {
    return auth.post(tokenUrl,
      {
        grant_type: 'refresh_token',
        refresh_token: token
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        transformRequest: jsonData => transformRequest(jsonData)
      }).pipe(
        retry(retryCount),
        pluck('data'),
      )
  }

  static getUserInfo(idToken, retryCount = 0) {
    return auth.post(baseUrl('lookup'),
      {
        idToken
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }).pipe(
        retry(retryCount),
        pluck('data'),
      )
  }

  // static updateProfile(displayName = '', photoUrl = '', retryCount = 0) {
  //   return auth.post(baseUrl('update'),
  //     {
  //       idToken: '',
  //       displayName,
  //       photoUrl,
  //       returnSecureToken: true
  //     },
  //     {
  //       headers: { 'Content-Type': 'application/json' }
  //     }).pipe(
  //       retry(retryCount),
  //       pluck('data'),
  //     )
  // }
}

export default AuthService