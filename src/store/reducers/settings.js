import * as actionsTypes from '../actions';

const initialState = {
  defaultLanguage: 'en',
  language: '',
  languages: ['en', 'ru', 'fr'],
}

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.SETTINGS_CHANGE_LANGUAGE: {
      return {
        ...state,
        ...payload
      }
    }


    default:
      return state
  }
}


export default settingsReducer