const findTheOldest = function (array) {
  const result = array.map(p => {
    if (p.yearOfDeath) {
      p.age = p.yearOfDeath - p.yearOfBirth;
    }
    else {
      p.age = new Date().getFullYear() - p.yearOfBirth;
    }
    return p;
  });
  return result.sort((a, b) => a.age - b.age).reverse()[0];
};

// Do not edit below this line
module.exports = findTheOldest;
