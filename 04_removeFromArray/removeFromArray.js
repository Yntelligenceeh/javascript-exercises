const removeFromArray = function(arr) {
    for (i = 1; i < arguments.length; i++) {
        if (arr.includes(arguments[i])) {
            let position = arr.indexOf(arguments[i]);
            arr.splice(position, 1);
        }
    }    
    return arr;
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 5))
// Do not edit below this line
module.exports = removeFromArray;
