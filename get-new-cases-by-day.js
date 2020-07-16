const getDate = require('./get-date')
const getNewCases = require('./get-new-cases')

const getNewCasesByDay = function(date, data) {
  for (const row of data ){
  if (getDate(row) === date){
    return getNewCases(row)
    }
  }
}




if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
