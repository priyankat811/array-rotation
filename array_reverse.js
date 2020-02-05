exports.reverse = function(array, start, end) {
    
    while(start < end) {

        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }

    return array;
}