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

const words = ['I', 'know', 'a', 'secret', 'down', 'in', 'uncle', 'toms', 'cabin'];
const bands = ['Poison', 'Metallica', 'Skid Row', 'Def Leppard'];

const map = function(arr, callback) {
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
};

const getFirstLetter = function(word) {
  return word[0];
};

const capitalize = function(word) {
  return word.toUpperCase();
};

const result2 = map(bands, getFirstLetter);
const result = map(words, capitalize);

const expectedResults = ['I', 'k', 'a', 's', 'd', 'i', 'u', 't', 'c'];
assertArraysEqual(result, ['I', 'KNOW', 'A', 'SECRET', 'DOWN', 'IN', 'UNCLE', 'TOMS', 'CABIN']);
assertArraysEqual(result2, ['P', 'M', 'S', 'D']);
assertArraysEqual(result2, expectedResults);
assertArraysEqual(map(bands, getFirstLetter), ['P', 'M', 'S', 'D']);