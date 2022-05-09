const assertEqual = require('./assertEqual');

const tail = function(data){
  let emptyArray = []
  if (data.length === 0){
    return emptyArray ;
  }
  else {
    return data.slice(1);
  }
}
module.exports = tail;
