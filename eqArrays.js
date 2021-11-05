const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('👌👍 Yay', actual, '===', expected);
  } else {
    console.log('😖🤬 Nay', actual, '!==', expected);
  }
};

function eqArrays(arr1, arr2) { return arr1 === arr2 && !(arr1 < arr2 || arr2 < arr1); }

assertEqual(eqArrays([1, 2, 3], [1, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([7, 9, 7], [7, 9, 17]), false);
assertEqual(eqArrays(null, [1, 2, 3]), false);
assertEqual(eqArrays(null, null), false);
assertEqual(eqArrays([new Date()], null), false);
assertEqual(eqArrays([new Date()], new Date()), true);