const reverseString = function(str) {
    /* C like function
    let n = str.length;
    let str_rev = "";
    for(let i = 1; i <= n; i++)
        str_rev += str.at(n - i);
    return str_rev;
    */
   return str.split("").reverse().join(""); //js like function
};

// Do not edit below this line
module.exports = reverseString;
