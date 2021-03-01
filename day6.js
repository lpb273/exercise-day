/**
 * 求多个数组之间的交集
 * @function findCommonElement
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Set}
*/

function findCommonElement(arr1, arr2) {
  const a = new Set(arr1);
  const b = new Set(arr2);
  return new Set([...a].filter(x => b.has(x)));
  // or 返回一个array
  // return Array.from(new Set([...a].filter(x => b.has(x))));
}

