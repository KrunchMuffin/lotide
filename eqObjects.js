// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const arr = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const obj = {0: 'a', 1: 'b', 2: 'c'};
const obj2 = {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e'};
const obj3 = {1: 'b', 2: 'c', 3: 'd', 4: 'e', 0: 'a'};
const anObj = {100: 'a', 2: 'b', 7: 'c'};
const anObj2 = {1000: 'a', 2: 'b', 7: 'c'};
const anObj3 = {7: 'c', 2: 'b', 1000: 'a'};

console.log(eqObjects(arr, arr2)); // false
console.log(eqObjects(obj, obj2)); // false
console.log(eqObjects(obj2, obj3)); // true
console.log(eqObjects(anObj, anObj2)); // false
console.log(eqObjects(anObj, ab)); // false
console.log(eqObjects(anObj2, anObj3)); // true
console.log(eqObjects(ab, ba)); // => true

const abc = {a: '1', b: '2', c: '3'};
console.log(eqObjects(ab, abc)); // => false