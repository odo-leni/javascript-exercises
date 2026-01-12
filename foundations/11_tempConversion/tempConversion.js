const convertToCelsius = function (temp) {
  let result = 0;

  result = (temp - 32) * (5 / 9);

  if (!Number.isInteger(result)) {
    result = result.toFixed(1);
    result = parseFloat(result);
  }

  return result;
};

const convertToFahrenheit = function (temp) {
  let result = 0;

  result = (temp * (9 / 5)) + 32;
  
  if (!Number.isInteger(result)) {
    result = result.toFixed(1);
    result = parseFloat(result);
  }

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
