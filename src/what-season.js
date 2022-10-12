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

  if (date === undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date === false || Object.getOwnPropertyNames(date).length)
    throw new Error('Invalid date!');

  let value = new Date(date).getMonth();
 
  
  if (value == 0 || value == 1 || value == 11) {return 'winter'}
  if (value == 2 || value == 3 || value == 4) {return 'spring'}
  if (value == 5 || value == 6 || value == 7) {return 'summer'}
  if (value == 8 || value == 9 || value == 10) {return 'autumn'}

}

module.exports = {
  getSeason
};
