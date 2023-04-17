/**
 * @param {Array} rows
 * @param {Object} sorting
 * @returns {Array}
 */
export function sorted(rows, sorting) {
  const list = rows.slice();
  list.sort((a, b) => {
    const itemA = a[sorting.by];
    const itemB = b[sorting.by];
    const comparison = sorting.asc ? itemA > itemB : itemA < itemB;
    return comparison ? 1 : -1;
  });

  return list;
}
