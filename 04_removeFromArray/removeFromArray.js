const removeFromArray = function(array, ...elements) {
  const newArray = [];
  for (const item of array) {
    if (!elements.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
