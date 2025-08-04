// 1
// 01
// 010
// 1010
// 10101
// 010101

let toggle = 1;
for(let i = 0; i < 6; i++){
    let str = "";
    for(let j=0; j <= i; j++){
        str = str + toggle;
        if(toggle === 1) toggle = 0;
        else toggle = 1
    }
    console.log(str);
}