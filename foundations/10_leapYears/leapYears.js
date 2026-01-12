const leapYears = function (year) {
  let result = false;

  result = year % 4 === 0;

  if (result && (year % 100 === 0)) {
    result = (year % 400 === 0);
  }

  return result;
};

// Do not edit below this line
module.exports = leapYears;
