const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options.addition= String(options.addition);
  
  if (str.length == 0) {return str}
  if (options.repeatTimes == 0) {return str }
  if (!options["additionSeparator"]) options["additionSeparator"] = "|";
  if (!options["separator"]) options["separator"] = "+";
if (!options.addition) {
  return str = (str+options.separator).repeat(options.repeatTimes-1) +str;}
console.log(str);


  if(options.addition) {

   let addition1 = ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition
  
  let str1 = str + addition1;
if (options.repeatTimes > 1 && options.additionRepeatTimes> 0) {
  let str2 = (str1+options.separator).repeat(options.repeatTimes-1) +str1;
  return str2
}
  }

}

module.exports = {
  repeater
};
