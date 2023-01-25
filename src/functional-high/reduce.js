function add(a, b) {
  return a + b;
}
const a = [1, 2, 3, 4].reduce(add, 2);
console.log(a);

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];

const compose = (...args) => (value) =>
  args.reduce((total, currentValue) => currentValue(total), value);
console.log(compose(reverse, first)([1, 2]));
