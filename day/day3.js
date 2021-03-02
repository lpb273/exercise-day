// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出
/**
 * @function multiRequest
 * @param {urls} Array
 * @param {maxNum} Number
 * @returns {Promise}
 * */

function multiRequest(urls = [], maxNum) {
  let result = new Array(urls.length).fill(false);
  let amount = urls.length;
  let count = 0;
  return new Promise((resolve, reject) => {
    while (count < maxNum) {
      next();
    };
    function next() {
      let current = count++;
      if (current >= amount) {
        !result.includes(false) && resolve(result);
        return;
      }
      let url = urls[current];
      fetch(url).then((res) => {
        result[current] = res;
        if (current < amount) {
          next();
        }
      }).catch((err) => {
        result[current] = err;
        if (current < amount) {
          next();
        }
      })
    };
  })
}