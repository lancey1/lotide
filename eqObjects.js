const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


const eqObjects = function(object1, object2) {
  const array1 = object.key(object1);
  const array2 = object.key(object2);
  let result = false;
  if (array1.length === array2.length) {
    array1.forEach(element => {
      if (array2.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

module.exports = eqObjects;