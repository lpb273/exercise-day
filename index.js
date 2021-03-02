/**
 * 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒
 * @function sleep
 * @param {Number} time
 * @returns {Promise}
*/

const sleep = (time) => {
  return new Promise (resolve => {
    setTimeout(resolve, time);
  })
}

//使用
sleep(500).then(res => {
  console.log(res);
})