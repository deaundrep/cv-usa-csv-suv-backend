const getDate = require('./get-date')
const getTotalCases = require('/getTotalCases')

const getTotalCasesByDay = function(date ,data) {
  for (const row of data){
    let dateRow = getDate(row)
    if (dateRow === date){
      return getTotalCases
    }
  }
  
}





if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
