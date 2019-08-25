import { ofType, combineEpics } from 'redux-observable';
import {
  map,
  withLatestFrom,
  pluck,
  tap,
  switchMap,
} from 'rxjs/operators'
import { empty } from 'rxjs';
import { defaultLanguage, languages } from '../selectors/settings';
import {
  settingsChangeLanguage,
  SETTINGS_CHANGE_LANGUAGE,
  SETTINGS_INIT_STATE_FROM_COOKIE
} from '../actions';
import CookieService from '../../services/cookie.service';

import i18n from "i18next";

export const settingsSetInitLanguage$ = (action$, state$) => action$.pipe(
  ofType(SETTINGS_INIT_STATE_FROM_COOKIE),
  pluck('payload', 'currentLanguage'),
  withLatestFrom(
    state$.pipe(map(defaultLanguage)),
    state$.pipe(map(languages)),
  ),
  map(([currentLanguage, defaultLang, languages]) => {
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    return currentLanguage
      ? currentLanguage
      : browserLang && languages.includes(browserLang)
        ? browserLang
        : defaultLang;
  }),
  map(language => settingsChangeLanguage(language))
)

export const settingsPresistLanguage$ = (action$, state$) => action$.pipe(
  ofType(SETTINGS_CHANGE_LANGUAGE),
  pluck('payload'),
  tap(({ language }) => {
    CookieService.setCookie('lang', language)
    i18n.changeLanguage(language)
  }),
  switchMap(() => empty())
)


const settings$ = combineEpics(
  settingsSetInitLanguage$,
  settingsPresistLanguage$
)

export default settings$