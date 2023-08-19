const sumAll = function(startNumber, endNumber) {
    let result = "ERROR";
    if (startNumber < 0 || endNumber < 0 || typeof startNumber != "number" || typeof endNumber != "number") return result;
    else if (endNumber >= startNumber) {
        result = (startNumber + endNumber) / 2 * (endNumber - startNumber + 1)
    }
    else {
        result = (startNumber + endNumber) / 2 * (startNumber - endNumber + 1)
    }
    return result;
    /*for (i = startNumber; i < endNumber; i++) {
        i += i;
    }
    return i;*/
};

console.log(sumAll(1, 10));
// Do not edit below this line
module.exports = sumAll;
