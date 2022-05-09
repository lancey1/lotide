// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function (originalArray, removeValues) {
  let withoutArray = originalArray;
  for (let i = 0; i < originalArray.length; i++){
    if (originalArray.length > removeValues.length) {
      if (originalArray[i] === removeValues[0]) {
        originalArray.splice(i, 1);
      }
    }
    for (let j = 0; j < removeValues.length; j++) {
      if (originalArray[i] === removeValues[j]) {
          originalArray.splice(i, 1);
      }
    }
  } return withoutArray;
}

module.exports = without;

  // console.log(without([1, 2, 3], [1])); // => [2, 3]
  // console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]