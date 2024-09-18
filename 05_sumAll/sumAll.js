const sumAll = function(a, b) {
    let sum = 0;

    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if(a < 0 || b < 0) return "ERROR";
        

    if(b < a){
        const aux = a;
        a = b;
        b = aux;
    }
    
    while(a <= b){
        sum += a;
        a++;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
