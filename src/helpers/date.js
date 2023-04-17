/**
 * @param {Date} date
 * @returns {String}
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('ru-RU');
}
