const repeatString = function(str, num) {
    let aux = "";
    if (num < 0) return 'ERROR';
    for(let i =1; i <= num; i++)
        aux+=str;
    return aux;
};

// Do not edit below this line
module.exports = repeatString;
