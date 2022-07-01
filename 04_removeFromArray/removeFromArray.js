const removeFromArray = function (arr1, ...args) {
    result = arr1.filter(num => !args.includes(num))
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
