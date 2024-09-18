const removeFromArray = function(array, ...args) {
    const newArray = [];

    for(number of array){
        if(!args.includes(number))
            newArray.push(number);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
