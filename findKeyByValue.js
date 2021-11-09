const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('👌👍 Yay', actual, '===', expected);
  } else {
    console.log('😖🤬 Nay', actual, '!==', expected);
  }
};

const findKeyByValue = (obj, value) =>
    Object.keys(obj).find(key => obj[key] === value);

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Ghost (UK)',
  drama: 'The Wire',
  rom_com: 'You\'re The Worst',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Ghost (UK)'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Ghost (US)'), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'You\'re The Worst'), 'rom_com');