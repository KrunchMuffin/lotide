const eqArrays = function(arr1, arr2) {
  return !!arr1 && !!arr2 && !(arr1 < arr2 || arr2 < arr1);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('Arrays are equal', arr1, arr2);
  } else {
    console.log('Arrays are NOT equal', arr1, arr2);
  }
};

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
middle([1, 2, 3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);