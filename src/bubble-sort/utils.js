function compare(currentIndexContent, nextIndexContent){
  return currentIndexContent > nextIndexContent
}

function changeOrder(list, currentIndex, nextIndex){
  [list[currentIndex], list[nextIndex]] = [list[nextIndex], list[currentIndex]]
}

module.exports = {
  changeOrder,
  compare
}
