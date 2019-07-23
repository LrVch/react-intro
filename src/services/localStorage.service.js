const APP_PREFIX = 'burger_';
export const TOKEN_KEY = `idToken`;
export const REFRESH_TOKEN = `refreshToken`;
export const REFRESH_TOKEN_EXP = `expiresAt`;

class LocalStorageService {

  static storage = localStorage;

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
      [REFRESH_TOKEN_EXP]: LocalStorageService.storage.getItem(REFRESH_TOKEN_EXP)
    }
  }

  static saveToken(idToken, refreshToken, expiresIn) {
    LocalStorageService.storage.setItem(TOKEN_KEY, idToken);
    LocalStorageService.storage.setItem(REFRESH_TOKEN, refreshToken);
    LocalStorageService.storage.setItem(REFRESH_TOKEN_EXP, expiresIn * 1000 + Date.now());
  }

  static destroyToken() {
    LocalStorageService.storage.removeItem(TOKEN_KEY);
    LocalStorageService.storage.removeItem(REFRESH_TOKEN);
    LocalStorageService.storage.removeItem(REFRESH_TOKEN_EXP);
  }
}

export default LocalStorageService