const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('👌👍', actual, '===', expected);
  } else {
    console.log('😖🤬', actual, '!==', expected);
  }
};

const head = function(arr) {
  return arr.slice(0, 1).pop();
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([]), undefined);
assertEqual(head(['', 6, 7]), '');