// input: [1,1,1,2,2,2,3,3,3,5,5,6,7];
// input: [1,2,3,5,6,7,8,3,3,5,5,6,7,7,8];

const arr = [1,1,1,2,2,2,3,3,3,5,5,6,7,7,8]


const removeDuplicates = arr =>{
 let x = 0;

 for(let i =0; i<arr.length; i++){
    if(arr[i] < arr[i+1]){
        x= x+1;
        arr[x] = arr[i+1];
    }
 }
 return x;

}

console.log(removeDuplicates(arr));