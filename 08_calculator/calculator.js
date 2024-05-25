const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(numArray) {
  return numArray.reduce((sum, nextNum) => sum + nextNum, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((sum, nextNum) => sum * nextNum);
};

const power = function(num, power) {
  return num**power;	
};

const factorial = function(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
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
