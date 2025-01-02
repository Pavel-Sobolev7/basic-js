const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const heights = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      heights.push(arr[i]);
    }
  }

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = 0; j < heights.length - 1 - i; j++) {
      if (heights[j] > heights[j + 1]) {
        const temp = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = temp;
      }
    }
  }

  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = heights[index];
      index++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
