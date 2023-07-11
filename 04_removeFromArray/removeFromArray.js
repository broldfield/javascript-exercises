const removeFromArray = function (array, ...number) {
  return array.filter((arrayNum) => !number.includes(arrayNum));
};

// Do not edit below this line
module.exports = removeFromArray;
