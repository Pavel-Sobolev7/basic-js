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
  let addition = options.addition !== undefined ? String(options.addition) : '';

  let repeatedAddition = '';
  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    if (i !== 0) {
      repeatedAddition += options.additionSeparator || '|';
    }
    repeatedAddition += addition;
  }

  let result = '';
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    if (i !== 0) {
      result += options.separator || '+';
    }
    result += str + repeatedAddition;
  }

  return result;
}


module.exports = {
  repeater
};
