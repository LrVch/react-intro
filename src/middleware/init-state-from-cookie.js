import CookieService from "../services/cookie.service";
import { settingsInitStateFromCookie } from "../store/actions";

let initialized = false

export const initStateFromCookie = store => next => action => {
  if (initialized) {
    return next(action)
  }

  initialized = true

  const currentLanguage = CookieService.getCookie('lang')

  store.dispatch(settingsInitStateFromCookie({ currentLanguage: currentLanguage || '' }))

  return next(action)
}