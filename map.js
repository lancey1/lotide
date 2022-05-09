const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

module.exports= map;

//assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])