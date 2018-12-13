const fs = require("fs");

function mostCommonOccurance(arr, key) {
	var 
	var dict = {};
	arr.forEach(friend => {
		if()
	})
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

	// Most common male first name
	var commonFemaleName = mostCommonOccurance(femaleFriends, "firstName");
	var commonMaleName = mostCommonOccurance(maleFriends, "firstName");

	// Most common female first name

});