/**
 * 函数作为返回值
 */
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      return fn.call(this, arguments);
    }
  };
}

let click = once(() => {
  console.log("已激活!");
});

click();
click();
click();
click();
click();
click();
