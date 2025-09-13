const num = 121.121;
// let reverseNum = "";
let reverseNum = 0;
const getReverseNumber = (num) => {
  while (num > 0) {
    remainder = num % 10;
    // reverseNum = remainder + reverseNum;
    reverseNum = 10 * reverseNum + remainder;
    num = Math.floor(num / 10);
  }
  return reverseNum;
};
const checkIfNumberIsPallindrome = (num) => {
  if (num < 0) return false;
  const reverseNumber = getReverseNumber(num);

  //   return Number(reverseNumber) === num;
  return reverseNumber === num;
};

const isPallindrome = checkIfNumberIsPallindrome(num);
console.log(isPallindrome);
