const fs = require("fs");
const helper = require('./helper/helper.js');



// Using api.getThreadList
/*
fs.readFile('data/messageData.txt', function(err, data) {
	const messageList = JSON.parse(data);
	//interesting: messageCount, unreadCount (pull those up)
   console.log(messageList[0]);
});*/

fs.readFile('data/large_messageData.txt', function(err, data) {
	// TODO check if it's a group (who are the participants in the group). thread.isGroup

	const messageList = JSON.parse(data);
	// Sorted by # of messages
	const sortedMessageList = messageList.concat().sort(function(a, b){return b.messageCount-a.messageCount});
	const dateOneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
	// TODO think about what happens in groups
	function findOldBestFriends() { // Returns old best friends
		var bestFriends = [];
		var i = 0;
		while(bestFriends.length < 3 && i < sortedMessageList.length) {
			var friend = sortedMessageList[i];
			if(sortedMessageList[i].lastMessageTimestamp < dateOneYearAgo && !friend.isGroup && friend.muteUntil != null) bestFriends.push(sortedMessageList[i]);  
			i++;
		}
		return[bestFriends[0], bestFriends[1], bestFriends[2]];
	}

	function findRecentBestFriends() { // Returns new best friends
		var bestFriends = [];
		var i = 0;
		while(bestFriends.length < 3 && i < sortedMessageList.length) {
			var friend = sortedMessageList[i];
			if(friend.lastMessageTimestamp >= dateOneYearAgo && !friend.isGroup && friend.muteUntil != null) bestFriends.push(friend); 
			i++; 
		}
		return[bestFriends[0], bestFriends[1], bestFriends[2]];
	}

	function findUnreadMessages() { 
		// TODO Returns unread messageas
	}

	console.log("Recent best friends")
	findRecentBestFriends().forEach(friend => console.log(friend.name));
	console.log("Old best friends")
	findOldBestFriends().forEach(friend => console.log(friend.name));
   	// console.log(messageList[0]);
});


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
