const repeatString = (word, repetitions) => {
  let result = "";
  if (repetitions == 0) {
    return result;
  }

  if (repetitions < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repetitions; i++) {
    result += word;
    console.log(result);
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
