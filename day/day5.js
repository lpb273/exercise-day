/**
 * 栈方法实现数据扁平化
 * @function flattenDeep
 * @param {Array} arr
 * @returns {Array} 
*/

function flattenDeep(arr) {
  const result = [];
  const stack = [...arr];
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val);
    } else {
      result.unshift(val);
    }
  }
  return result;
}