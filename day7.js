/**
 * 给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @function twoSum
 * @param {Array} nums
 * @param {Number} target
 * @returns {Array}
*/

function twoSum(nums, target) {
  let map = new Map();
  for(let i = 0;i < nums.length;i ++) {
    let k = target - nums[i];
    if(map.has(k)){
      return [map.get(k), i];
    }
    map.set(nums[i], i);
  }
  return [];
}