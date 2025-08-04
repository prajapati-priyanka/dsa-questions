// 1
// 10
// 101
// 1010
// 10101


for(let i = 0; i < 5; i++){
    let str = "";
    let toggle = 1;
    for(let j=0; j <= i; j++){
        str = str + toggle;
        if(toggle === 1) toggle = 0;
        else if(toggle === 0) toggle = 1
    }
    console.log(str);
}