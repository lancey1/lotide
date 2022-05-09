const assertEqual = require('./assertEqual');

const head = function(data){
  if (data.length == 0){
    return undefined;
}
  else {
    return data[0];
  }
}

module.exports = head;

// Test Code
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

