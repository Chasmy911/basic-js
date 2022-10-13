const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {    throw new Error();   }
  if (arr.length === 0) return [];

  for (let i=1; i<arr.length; i++) {
    var pos = arr.indexOf('--discard-next');
    n = 2;
    var arr1=[];
if (arr[i]=='--discard-next') { return arr1= arr.splice(pos, n); }


  }


}

module.exports = {
  transform
};
