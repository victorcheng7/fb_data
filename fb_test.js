const login = require("facebook-chat-api");
const fs = require("fs");
require('dotenv').config()

var credentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}

/*
Derive insight out of 
*/


// Create simple echo bot
login({email: process.env.EMAIL, password: process.env.PASSWORD}, (err, api) => {
    if(err) return console.error(err);

    // Get information about messages
    api.getThreadList(50, null, ["INBOX"], (err, list) => {
        //interesting: messageCount, unreadCount (pull those up)
    	//console.log(list);
        /*fs.writeFile('messageData.txt', JSON.stringify(list), function (err) {
          if (err) throw err;
          console.log('Saved messages!');
        });*/


    });

    // Get information about friends
    api.getFriendsList((err, data) => {
        if(err) return console.error(err);

        /*fs.writeFile('friendsData.txt', JSON.stringify(data), function (err) {
          if (err) throw err;
          console.log('Saved friendList!');
        });*/

        // Percentage breakdown gender: gender, firstName (most frequent), 
        
        //console.log(data);
    });	
});
