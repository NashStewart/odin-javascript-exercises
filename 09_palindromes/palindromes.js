const palindromes = function (string) {
  const nonAlphaNumeric = /[^a-z0-9]/gi;
  const alphaNumeric = string.replace(nonAlphaNumeric, '').toLowerCase();
  const alphaNumericReversed = alphaNumeric
    .split('')
    .reverse()
    .join('');
 
  return alphaNumeric == alphaNumericReversed;
};

// Do not edit below this line
module.exports = palindromes;
