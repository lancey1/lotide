const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const letterPositions = function (sentence) {
  const results = {};
  for (var i = 0; i < sentence.length; i++) {
    const letterPosition = i
    const letter = sentence[i];
    if (!results[letter]) {
      results[letter] = letterPosition;
    }
    else {
        results[letter]+= "," + letterPosition;
  }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"))
// assertEqual(letterPositions("hello").h, 0)