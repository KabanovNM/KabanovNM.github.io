/**
 * @param {Number} percentage
 * @returns {String}
 */
export function progressColor(percentage) {
  const style = getComputedStyle(document.body);
  if (percentage < 50) {
    return style.getPropertyValue('--color-error');
  }

  if (percentage < 75) {
    return style.getPropertyValue('--color-warning');
  }

  return style.getPropertyValue('--color-success');
}

/**
 * @param {Number} score
 * @returns {String}
 */
export function getSubjectClass(score) {
  return Number(score) > 4 ? 'passed' : Number(score) < 3 ? 'danger' : 'warning';
}

/**
 * @param {Number} score
 * @returns {String}
 */
export function getTotalClass(score) {
  return Number(score) > 12 ? 'passed' : Number(score) < 9 ? 'danger' : 'warning';
}
