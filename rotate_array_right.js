var ArrayReverse = require('./array_reverse');

exports.rotate_Array = function(array, shiftPositions) {
    
    shiftPositions = shiftPositions % array.length;

    ArrayReverse.reverse(array, 0, array.length - 1);
    ArrayReverse.reverse(array, 0, shiftPositions - 1);
    ArrayReverse.reverse(array, shiftPositions, array.length - 1);

    return array;
}