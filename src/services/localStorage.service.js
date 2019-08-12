const APP_PREFIX = 'burger_';
export const TOKEN_KEY = `idToken`;
export const REFRESH_TOKEN = `refreshToken`;
export const REFRESH_TOKEN_EXP_AT = `expiresAt`;
export const REFRESH_TOKEN_EXP_IN = `expiresIn`;

let localStorageInstance

if (typeof localStorage !== 'undefined') {
  localStorageInstance = localStorage
} else {
  localStorageInstance = {}
}

class LocalStorageService {

  static storage = localStorageInstance;

  static setItem(key, value) {
    LocalStorageService.storage.setItem(
      `${APP_PREFIX}${key}`,
      JSON.stringify(value)
    );
  }

  static getItem(key) {
    return JSON.parse(
      LocalStorageService.storage.getItem(`${APP_PREFIX}${key}`)
    );
  }

  static removeItem(key) {
    LocalStorageService.storage.removeItem(`${APP_PREFIX}${key}`);
  }

  static getToken() {
    return LocalStorageService.storage.getItem(TOKEN_KEY)
  }

  static getFullToken() {
    return {
      [TOKEN_KEY]: LocalStorageService.storage.getItem(TOKEN_KEY),
      [REFRESH_TOKEN]: LocalStorageService.storage.getItem(REFRESH_TOKEN),
      [REFRESH_TOKEN_EXP_AT]: LocalStorageService.storage.getItem(REFRESH_TOKEN_EXP_AT),
      [REFRESH_TOKEN_EXP_IN]: LocalStorageService.storage.getItem(REFRESH_TOKEN_EXP_IN),
    }
  }

  static saveToken(idToken, refreshToken, expiresIn) {
    LocalStorageService.storage.setItem(TOKEN_KEY, idToken);
    LocalStorageService.storage.setItem(REFRESH_TOKEN, refreshToken);
    LocalStorageService.storage.setItem(REFRESH_TOKEN_EXP_IN, expiresIn);
    LocalStorageService.storage.setItem(REFRESH_TOKEN_EXP_AT, expiresIn * 1000 + Date.now());
  }

  static destroyToken() {
    LocalStorageService.storage.removeItem(TOKEN_KEY);
    LocalStorageService.storage.removeItem(REFRESH_TOKEN);
    LocalStorageService.storage.removeItem(REFRESH_TOKEN_EXP_IN);
    LocalStorageService.storage.removeItem(REFRESH_TOKEN_EXP_AT);
  }
}

export default LocalStorageService