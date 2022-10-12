const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let month = date.getMonth()
  let spring = [3, 4, 5];
  let summer = [6, 7, 8];
  let autumn = [9,10, 11];
  let winter = [12, 1, 2];

}

module.exports = {
  getSeason
};
