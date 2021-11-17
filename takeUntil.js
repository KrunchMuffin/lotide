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

const words = ['I', 'know', 'a', 'secret', 'down', 'in', 'uncle', 'toms', 'cabin'];
console.log(takeUntil(words, untilThis => untilThis === 'uncle'));
assertArraysEqual(takeUntil(words, untilThis => untilThis === 'uncle'), ['I', 'know', 'a', 'secret', 'down', 'in']);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, untilThis => untilThis < 0));
assertArraysEqual(takeUntil(data1, untilThis => untilThis < 0), [1, 2, 5, 7, 2]);

const data2 = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
console.log(takeUntil(data2, untilThis => untilThis === ','));
assertArraysEqual(takeUntil(data2, untilThis => untilThis === ','), ['I\'ve', 'been', 'to', 'Hollywood']);