const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, input) {
  for (let keys in object) {
    if (object[keys] === input) {
      return keys;
    }
  }
};


module.exports = findKeyByValue;


// const object = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };
// assertEqual(findKeyByValue(object, "The Wire"), "drama");
// assertEqual(findKeyByValue(object, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(object, "The Expanse"), "sci_fi");
