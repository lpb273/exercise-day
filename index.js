// 防抖，事件绑定，动作发生后一定时间触发，如果在该段时间内，动作再次发生，则需要重新等待一定时间
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间


function debounce(func, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, time);
  }
}

// 截流，事件绑定，动作发生后一段时间触发，在该段时间内，如果动作重复触发，则无视该动作，直到事件执行完后，才能重复触发
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

// function throttle(func, time) {
//   let activeTime = 0;
//   return () => {
//     const currentTime = Date.now();
//     console.warn('currentTime', currentTime);
//     if(currentTime - activeTime > time) {
//       console.warn(func)
//       func.apply(this, arguments);
//       activeTime = Date.now();
//     }
//   }
// }

function throttle(func, time) {
  let canRun = true;
  return () => {
    if(!canRun) return;
    canRun = false;
    setTimeout(() => {
      func.apply(this, arguments);
      canRun = true;
    }, time);
  }
}