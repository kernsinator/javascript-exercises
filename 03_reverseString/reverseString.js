const reverseString = function(inputString) {
    let stringArray = inputString.split("");
    let reversedArray = stringArray.reverse()
    return reversedArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
