const fs = require("fs");
const helper = require('./helper/helper.js');


/*
// Using api.getThreadList
fs.readFile('data/messageData.txt', function(err, data) {
	//interesting: messageCount, unreadCount (pull those up)
   console.log(JSON.parse(data));
});
*/

// Using api.getfriendList

fs.readFile('data/friendsData.txt', function(err, data) {

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
	var commonFemaleName = helper.mostFrequentOccurance(helper.flattenArrayByKey(femaleFriends, "firstName"));
	var commonMaleName = helper.mostFrequentOccurance(helper.flattenArrayByKey(maleFriends, "firstName"));
	console.log("Most common female name: " + commonFemaleName[0] + " with count " + commonFemaleName[1]);
	console.log("Most common male name: " + commonMaleName[0] + " with count " + commonFemaleName[1]);

});
