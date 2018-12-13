const fs = require("fs");

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

/*
// Using api.getThreadList
fs.readFile('messageData.txt', function(err, data) {
	//interesting: messageCount, unreadCount (pull those up)
   console.log(JSON.parse(data));
});
*/

// Using api.getfriendList
fs.readFile('friendsData.txt', function(err, data) {

	const friendList = JSON.parse(data);
	console.log(friendList[0]);

	console.log("Total friends: " + friendList.length);

	// Gender of Friends -- Change to percentage
	var femaleFriends = friendList.filter(friend => friend.gender === "female_singular");
	var maleFriends = friendList.filter(friend => friend.gender === "male_singular");
	var unknownGenderFriends = friendList.filter(friend => friend.gender === "unknown_singular");
	var neuterFriends = friendList.filter(friend => friend.gender === "neuter_singular");

	console.log("Total # female friends: " + femaleFriends.length);
	console.log("Total # male friends: " + maleFriends.length);
	console.log("Total # unknown gendered friends: " + unknownGenderFriends.length);
	console.log("Total # neutral gendered friends: " + neuterFriends.length);

	// Most common male/female first names
	var commonFemaleName = mostFrequentOccurance(flattenArrayByKey(femaleFriends, "firstName"));
	var commonMaleName = mostFrequentOccurance(flattenArrayByKey(maleFriends, "firstName"));
	console.log("Most common female name: " + commonFemaleName[0] + " with count " + commonFemaleName[1]);
	console.log("Most common male name: " + commonMaleName[0] + " with count " + commonFemaleName[1]);


});