const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
middle([1, 2, 3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);