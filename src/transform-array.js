const { NotImplementedError } = require("../extensions/index.js");

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
  /* throw new NotImplementedError('Not implemented');
     remove line with error and write your code here */
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const keys = [
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ];
  return arr.reduce((acc, el, index, array) => {
    switch (el) {
      case "--double-next":
        if (array[index + 1]) acc.push(array[index + 1]);
        break;
      case "--double-prev":
        if (!keys.includes(array[index - 1]) && index - 1 > 0)
          acc.push(array[index - 1]);
        break;
      case "--discard-next":
        array.splice(index + 1, 1);
        break;
      case "--discard-prev":
        if (!keys.includes(array[index - 1]) && index - 1 > 0) acc.pop();
        break;
      default: {
        acc.push(el);
      }
    }
    return acc;
  }, []);
}

module.exports = {
  transform,
};
