import { createSelector } from 'reselect'

export const settingsState = state => state.settings

export const currentLanguage = createSelector(
  settingsState,
  settingsState => settingsState.language
)

export const defaultLanguage = createSelector(
  settingsState,
  settingsState => settingsState.defaultLanguage
)

export const languages = createSelector(
  settingsState,
  settingsState => settingsState.languages
);
