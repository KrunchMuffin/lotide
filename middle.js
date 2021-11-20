const middle = function(arr) {
  let arrMiddle = [];
  const arrCnt = arr.length;

  if (arrCnt > 2) {
    if (arrCnt % 2 === 0) {
      // even
      arrMiddle.push(arr[arrCnt / 2 - 1 | 0]);
      arrMiddle.push(arr[arrCnt / 2 | 0]);
    } else if (arrCnt % 2 === 1) {
      // odd
      arrMiddle.push(arr[arrCnt / 2 | 0]);
    }
  }
  return arrMiddle;
};

module.exports = middle;
