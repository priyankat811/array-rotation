var ArrayReverse = require('./array_reverse');

exports.rotate_Array = function(array, shiftPositions) {
    
    shiftPositions = shiftPositions % array.length;

    ArrayReverse.reverse(array, 0, array.length - 1);   //reverse the whole array
    ArrayReverse.reverse(array, 0, shiftPositions - 1); // reverse the first part upto shifting positions
    ArrayReverse.reverse(array, shiftPositions, array.length - 1); //reverse the second part upto shifting positions

    return array;
}