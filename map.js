const map = function(arr, callback) {
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;