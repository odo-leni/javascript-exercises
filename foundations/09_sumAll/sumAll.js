const sumAll = function (firstValue, secondValue) {
  if (firstValue < 0 || secondValue < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
    return "ERROR";
  }

  let start = firstValue;
  let end = secondValue;

  let result = 0;

  if (secondValue < firstValue) {
    start = secondValue;
    end = firstValue;
  }

  for (i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
