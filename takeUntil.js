const takeUntil = function(array, cb) {
  const newArr = [];
  for (let el of array) {
    if (cb(el) === false) {
      newArr.push(el);
    } else {
      return newArr;
    }
  }
};

module.exports = takeUntil;