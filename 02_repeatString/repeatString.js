const repeatString = function(string, num) {
    let wordToRepeat = 'hey';
    if (num === 0 || string === '') {
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else {
        for (i=1; i < num; i++) {
            string += wordToRepeat;
        }
        console.log(string);
        return string;
    }
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
