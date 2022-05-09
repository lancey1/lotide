const assertEqual = require('./assertEqual')

const countLetters = function (toBeCounted) {
  const counter = {};
  for (let i = 0; i < toBeCounted.length; i++) { 	// Loop over the words
    const letter = toBeCounted[i];
    if (!counter[letter]) { 
    // if the letter isn't in the object, it means that the letter is a new and will create and assign it the value 1
      counter[letter] = 1;
    } else {
    // else, it means that the property is existing and just increment it by 1
      counter[letter]++;
    }
  }
  delete counter[" "]; 
  return counter; 
};

module.exports = countLetters;