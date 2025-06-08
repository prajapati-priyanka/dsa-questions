// Write a function that returs the second largest number in an aray.
// Input: const arr = [4,9,0,2,8,7,1]
// Ouptut: 17

// const arr = [4,9,0,2,8,7,1];
const arr = [10, 20, 8, 20, 4, 3, 5, 20, 20];
let firstLargestNum = -Infinity; // smallest number in the number system
let secondLargestNum = -Infinity;

const secondLargestNumber = (arr) => {
  // This handles the empty array and minimum number of elements in an array corner case
  if (arr.length < 2) {
    return "Array shold have atleast 2 elements";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = arr[i];
      //   This AND conditons handles duplicate numbers in an array corner case
    } else if (arr[i] > secondLargestNum && arr[i] !== firstLargestNum) {
      secondLargestNum = arr[i];
    }
  }
  return secondLargestNum;
};

console.log(secondLargestNumber(arr));
