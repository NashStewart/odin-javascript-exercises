const fibonacci = function(position) {
  if (position < 0) return 'OOPS'; 
  if (position == 0) return 0;

  let prev1 = 0;
  let prev2 = 1;
  for (let i = 2; i <= position; i++) {
    const temp = prev1 + prev2;
    prev1 = prev2;
    prev2 = temp;
  }
  return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
