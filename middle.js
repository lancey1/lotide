const middle = function (array) {
  var emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  }
  if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  }
  if (array.length % 2 === 1) {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;

// console.log(middle([])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]