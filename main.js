let rotateArray = require('./rotate_array_right');

let array = [];
let shiftPositions = 0;
let length = process.argv.length;

for(let index=2, arrayIndex=0; index<length-1; index++, arrayIndex++) {
    //console.log(process.argv[index]);
    array[arrayIndex] = process.argv[index];
}

shiftPositions = process.argv[length-1];

console.log("Array Before rotation: "+array);

console.log("Array after rotation: "+rotateArray.rotate_Array(array, shiftPositions));