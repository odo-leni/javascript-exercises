const repeatString = function (string, repeat) {
  if (repeat >= 0) {
    let result = "";

    for (i = 0; i < repeat; i++) {
      result += string;
    }

    return result;
  }
  else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
