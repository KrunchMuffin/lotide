function eqArrays(arr1, arr2) { return arr1 === arr2 && !(arr1 < arr2 || arr2 < arr1); }

assertArraysEqual = function(args) {
  const arr1 = args.pop();
  const arr2 = args.pop();
  // console.log(args, arr1, arr2);
  if (eqArrays(arr1, arr2)) {
    console.log('Arrays are equal', arr1, arr2);
  } else {
    console.log('Arrays are NOT equal', arr1, arr2);
  }
};

assertArraysEqual(process.argv.slice(2));




