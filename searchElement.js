// Ques: Write a function that search for an element in an array and returns the index. If the element is not present then return -1


const arr = [1,2,6,10,50,100,3,5];


const searchElement = (arr, num) =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }

    return -1;
}

console.log(searchElement(arr,10))