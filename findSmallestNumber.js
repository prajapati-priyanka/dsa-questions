// Write a function that returs the smallest number in an aray.
// Input: const arr = [5,100,7,10,8,17,1]
// Ouptut: 17
// Infinity ==> largest Number in the number system

const arr = [5,100,7,10,8,17,1009,5];
let smallest = arr[0] // 5

const smallestNumber  = (arr) =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber(arr))