const convertToCelsius = function(temp) {
  const number = 5/9*(temp-32);
  return Math.round(number * 10) / 10;
  
};

const convertToFahrenheit = function(temp) {
  const number = (temp*9/5) + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
