const getRow = require('./get-row.js');


const getRows = function(str) {
  let splitUp = str.split('\n')
  let result = []
  for(const item of splitUp){
    result.push(getRow(item))
  }
  return result
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
