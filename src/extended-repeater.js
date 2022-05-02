const { NotImplementedError } = require("../extensions/index.js");

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
  /* throw new NotImplementedError('Not implemented');
     remove line with error and write your code here */
  let result = "";
  let additionSeparator =
    options && options.additionSeparator ? options.additionSeparator : "|";
  let separator = options && options.separator ? options.separator : "+";
  let addition =
    options && options.addition !== undefined ? options.addition + "" : "";
  let repeatTimes = options && options.repeatTimes ? options.repeatTimes : 1;
  let additionRepeatTimes =
    options && options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  str = str + "";
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    if (addition !== "") {
      for (let k = 0; k < additionRepeatTimes; k++) {
        result += addition;
        if (additionSeparator && k + 1 < additionRepeatTimes) {
          result += additionSeparator;
        }
      }
    }
    if (separator && i + 1 < repeatTimes) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
