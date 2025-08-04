//     *
//    **
//   ***
//  ****
// *****

// for these types of patterns, need three loops.

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < (5-1)-i; j++) {
        str = str + " "
    }
    for(let k=0; k<(i+1); k++){
        str = str + "*"
    }
    console.log(str);
}