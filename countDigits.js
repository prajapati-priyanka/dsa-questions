// Write a program to count number of digits in a number


let number = -101233;
let count = 0;

const countDigits = num =>{
    // This will handle negative numbers
    let newNum = Math.abs(num);
    
    if(num === 0) return 1;
 
    while(newNum > 0){
        newNum = Math.floor(newNum /10);
        count++;
    }
    return count;
}

console.log(countDigits(number));