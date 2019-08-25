export const SETTINGS_CHANGE_LANGUAGE = 'SETTINGS_CHANGE_LANGUAGE'
export const SETTINGS_INIT_STATE_FROM_COOKIE = 'SETTINGS_INIT_STATE_FROM_COOKIE'

export const settingsChangeLanguage = (language) => ({
  type: SETTINGS_CHANGE_LANGUAGE,
  payload: { language }
})

export const settingsInitStateFromCookie = ({ currentLanguage }) => ({
  type: SETTINGS_INIT_STATE_FROM_COOKIE,
  payload: { currentLanguage }
})



