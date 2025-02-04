const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  /* throw new NotImplementedError('Not implemented');
     remove line with error and write your code here */
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let k = 0; k < matrix[i].length; k++) {
      let check = 0;
      if (i > 0) {
        if (k > 0) {
          if (matrix[i - 1][k - 1]) check++;
        }
        if (matrix[i - 1][k]) check++;
        if (k < matrix[i - 1].length - 1) {
          if (matrix[i - 1][k + 1]) check++;
        }
      }

      if (k > 0) {
        if (matrix[i][k - 1]) check++;
      }
      if (k < matrix[i].length - 1) {
        if (matrix[i][k + 1]) check++;
      }

      if (i < matrix.length - 1) {
        if (k > 0) {
          if (matrix[i + 1][k - 1]) check++;
        }
        if (matrix[i + 1][k]) check++;
        if (k < matrix[i + 1].length - 1) {
          if (matrix[i + 1][k + 1]) check++;
        }
      }
      result[i][k] = check;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
