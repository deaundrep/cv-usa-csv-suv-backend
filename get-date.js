const getDate = function(arr) {
  return arr[3]
}


if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
