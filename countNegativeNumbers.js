// Ques: Write a function that returns the number of negative numbers in an array.
// Input: const arr = [2,-9,17,0,1,-10,-4,8] 
// Output: -3



const arr = [2,-9,17,0,1,-10,-4,8] ;

let count = 0;

const countNegativeNumbers = num =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }

    return count;
}

console.log(countNegativeNumbers(arr))