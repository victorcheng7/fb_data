// getOccurances Test
const offline_test = require('./helper/helper.js');

console.log(offline_test.flattenArrayByKey([{'a': 1},{'b':2}], 'a') === [1]);
console.log(offline_test.flattenArrayByKey([{'a': {'c': 1}},{'b':2}], ['a', 'c']) === [1]);
console.log(offline_test.mostFrequentOccurance([1,2,3,3]) === 3);
