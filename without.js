const without = function(arr, toRemove) {
  let filteredArr = [];  // should prolly use filter()
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < toRemove.length; x++) {
      let outerForVar = arr[i];
      if (outerForVar !== toRemove[x]) {
        filteredArr.push(outerForVar);
      }
    }
  }
  return filteredArr;
};

module.exports = without;