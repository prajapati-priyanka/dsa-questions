// input: [3,2,2,3] => 3
// output: [2,2] => 2


const arr = [3,2,1,5,3,4,8,3];


const removeElement = (arr, val) =>{
 let x = 0;

 for(let i =0; i<arr.length; i++){
    // shifts element to left if it is not equal to val
    if(arr[i] !== val){
        arr[x] = arr[i];
        x= x+1;

    }
 }
 return x;

}

console.log(removeElement(arr, 3));