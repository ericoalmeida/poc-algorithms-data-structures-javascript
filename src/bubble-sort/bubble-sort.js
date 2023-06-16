const { changeOrder } = require('./utils');

function bubbleSort(list, compareCB) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      // Check if current index content is greater than next index content
      if (compareCB(list[j], list[j + 1])) {
        // if true change order of values
        changeOrder(list, j, j + 1);
      }
    }
  }
}

module.exports = {
  bubbleSort,
};
