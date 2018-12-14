// Reduces array of objects into array of value @ specified key
function flattenArrayByKey(arr, key) { // Returns Array
	const getNestedObject = (nestedObj, pathArr) => {
		return pathArr.reduce((obj, key) =>
        	(obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
	};

	return arr.map(friend => {
		return getNestedObject(friend, key instanceof Array ? key : [key]);
	}).filter(result => typeof result != "undefined");
}

// Given array, returns [most occured value, count of most occured value] 
function mostFrequentOccurance(arr) { 
	var dict = {};
	var maxValue;
	var maxCount = 0;
	
	arr.forEach(value => {
		if(dict[value] == undefined) dict[value] = 1;
		else dict[value]++;
	});

	Object.keys(dict).forEach(function(key) {
		if(dict[key] > maxCount) {
			maxCount = dict[key];
			maxValue = key;
		}
	});
	return [maxValue, maxCount];
}


module.exports = {
    flattenArrayByKey: flattenArrayByKey,
    mostFrequentOccurance: mostFrequentOccurance
};
