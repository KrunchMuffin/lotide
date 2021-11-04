// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('👌👍', actual, '===', expected);
  } else {
    console.log('😖🤬', actual, '!==', expected);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(10, 'x');
assertEqual(9, 99);
assertEqual('test', 'test');