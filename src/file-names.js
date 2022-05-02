const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  /* throw new NotImplementedError('Not implemented');
     remove line with error and write your code here */
  let myArray = [];
  if (names.length === 0) {
    return myArray;
  } else {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === names[i + 1]) {
        myArray.push(names[i]);
      } else if (names[i] !== names[i + 1] && names[i] === names[i - 1]) {
        myArray.push(names[i] + "(1)");
      } else if (names[i] === names[i + 1] + "(1)") {
        myArray.push(names[i] + "(1)");
        myArray.push(names[i + 1] + "(2)");
        break;
      } else {
        myArray.push(names[i]);
      }
    }
    return myArray;
  }
}

module.exports = {
  renameFiles,
};
