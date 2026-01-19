const fibonacci = function (number) {
  const n = parseInt(number, 10);

  if (n < 0) {
    return "OOPS";
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const fb = function (number) {
    if (number === 0) {
      return 0;
    }
    if (number === 1) {
      return 1;
    }
    return fb(number - 1) + fb(number - 2);
  }

  return result = fb(n - 1) + fb(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
