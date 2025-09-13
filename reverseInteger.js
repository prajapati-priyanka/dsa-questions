let number = -123000;
let reverse = 0;
let reverseNum;

function getReverseNumber(num) {
  while (num > 0) {
    let remainder = num % 10;
    reverse = 10 * reverse + remainder;
    num = Math.floor(num / 10);
  }
  return reverse;
}
function reverseNumber(num) {
  reverseNum = getReverseNumber(Math.abs(num));
  return num < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNumber(number));
