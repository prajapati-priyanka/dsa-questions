let number = 123;
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
  if (num < 0) {
    reverseNum = getReverseNumber(Math.abs(num));
    console.log(-reverseNum);
  } else {
    reverseNum = getReverseNumber(num);
    console.log(reverseNum);
  }
}

reverseNumber(number);
