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

console.log(process.argv.slice(2));
assertArraysEqual(process.argv.slice(2)[0], process.argv.slice(2)[1]);




