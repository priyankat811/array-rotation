let rotateArray = require('./rotate_array_right');

let array = [1,2,3,4,5,6,7,8]
let shiftPositions = 2;

console.log("Array Before shifting: "+array);

console.log("Array after shifting: "+rotateArray.rotate_Array(array, shiftPositions));