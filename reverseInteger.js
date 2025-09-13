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
  const limit = Math.pow(2, 31);
  if (reverseNum < -limit || reverseNum > limit) return 0; // corner case
  return num < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNumber(number));
