/**
 * @param {String} key
 * @returns {*}
 */
export function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * @param {string} key
 * @param {*} value
 */
export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
