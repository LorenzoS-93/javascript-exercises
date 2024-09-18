const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let prod = 1;
  array.forEach((element) => {
    prod *= element;
  });
  return prod;
};

const power = function(a, b) {
  let power = 1;
  if(b === 0) return power;
  
  for(let i = 1; i<= b; i++)
    power *= a;
	
  return power;
};

const factorial = function(n) {
	let fact = 1;
  if(n === 0) return fact;

  for(let i = n; i >= 1; i--)
    fact *= i;
  
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
