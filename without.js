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
let filteredArr = [];
const without = function(arr, toRemove) {
  // should prolly use filter()
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < toRemove.length; x++) {
      let outerForVar = arr[i];
      if (outerForVar !== toRemove[x]) {
        filteredArr.push(outerForVar);
      }
    }
  }
  assertArraysEqual(words, filteredArr);
};

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
