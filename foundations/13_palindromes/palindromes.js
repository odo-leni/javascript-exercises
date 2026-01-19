const palindromes = function (string) {
  let cleaned = string.replace(/[^\w]/g, ''); // matches any character that is not a word character (letters, numbers, underscores)
  cleaned = cleaned.replaceAll("_", ""); // remove underscores
  const reverseCleaned = cleaned.split('').reverse().join('');
  //console.log(cleaned.toLowerCase());
  //console.log(reverseCleaned.toLowerCase());
  return cleaned.toLowerCase() === reverseCleaned.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
