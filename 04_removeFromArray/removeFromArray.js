const removeFromArray = function(startingArray, ...itemsToRemove) {
    
    let endingArray = startingArray.filter(item => !itemsToRemove.includes(item))
    return endingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
