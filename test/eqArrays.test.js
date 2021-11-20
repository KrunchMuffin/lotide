const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([7, 9, 7], [7, 9, 17]), false);
assertEqual(eqArrays(null, [1, 2, 3]), false);
assertEqual(eqArrays(null, undefined), false);
assertEqual(eqArrays([new Date()], null), false);
assertEqual(eqArrays([new Date()], [new Date()]), true);