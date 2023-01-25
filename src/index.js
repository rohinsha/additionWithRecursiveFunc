// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let sum = 0;
function getSumOfNums(num) {
  if (num > 0) {
    //console.log(num);
    sum += num;
    getSumOfNums(num - 1);
  }
  return sum;
}
console.log(getSumOfNums(4));
