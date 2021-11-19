const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('👌👍 Yay', actual, '===', expected);
  } else {
    console.log('😖🤬 Nay', actual, '!==', expected);
  }
};
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};
const obj = {
  'Blue Hill': {stars: 1},
  'Akaleri': {stars: 3},
  'noma': {stars: 2},
  'elBulli': {stars: 3},
  'Ora': {stars: 2},
  'Akelarre': {stars: 3},
};
console.log(findKey(obj, iWant => iWant.stars === 2)); // => "noma"

assertEqual(obj, 'noma');