// Write a function that returs the largest number in an aray.
// Input: const arr = [5,0,7,10,8,17,1]
// Ouptut: 17


const arr = [5,0,7,10,8,17,1];
let maxNum = arr[0] // 5

const largestNumber  = (arr) =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log(largestNumber(arr))