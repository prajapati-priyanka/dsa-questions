// input: ["h","e", "l", "l","o"];
// output: ["o","l", "l", "e","h"];

const str = ["h", "e", "l", "l", "o", "p"];
const reverseStr = (str) => {
  // run the loop half the length
  for (let i = 0; i < str.length / 2; i++) {
    // logic to swap two values using third variable
    let temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }
  return str;
};

console.log(reverseStr(str));
