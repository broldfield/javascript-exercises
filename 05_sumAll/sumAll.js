const sumAll = function (valueA, valueB) {
  let result = 0;
  let minRange, maxRange;

  if (typeof valueA != "number" || typeof valueB != "number") {
    return "ERROR";
  }

  if (valueA < 0 || valueB < 0) {
    return "ERROR";
  }

  valueA < valueB
    ? ((minRange = valueA), (maxRange = valueB))
    : ((minRange = valueB), (maxRange = valueA));

  for (let i = minRange; i <= maxRange; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
