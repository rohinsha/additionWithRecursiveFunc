function createAnimal(type) {
  return function (name) {
    console.log("类别:", type, "名字", name);
  };
}

let createBirds = createAnimal("birds");
createBirds("parrot");
createBirds("sparrow");

/**
 *
 * @param {*} a
 * @param {*} b
 */
function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return (x) => a + x;
  }
}

console.log(add(1)(2));

function match(reg) {
  return (str) => {
    return str.match(reg);
  };
}

const matchPhone = match("123");
console.log(matchPhone("123"));

/**
 * 函数柯里化
 * @param {*} fn
 */
function curry(fn) {
  // const arr = Array.from(arguments)
  function _curry(...args) {
    // function.length 指的是形参的个数
    if (args.length < fn.length) {
      return function () {
        const arr = [...args, ...Array.from(arguments)];
        return _curry(...arr);
      };
    } else {
      return fn(...args);
    }
  }
  return _curry;
}
const add2 = (a, b) => {
  return a + b;
};
let curryAdd = curry(add2);
console.log(curryAdd(1)(2));
