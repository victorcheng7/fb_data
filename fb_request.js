const login = require("facebook-chat-api");
const fs = require("fs");
require('dotenv').config()

var credentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}


// Create simple echo bot
login({email: process.env.EMAIL, password: process.env.PASSWORD}, (err, api) => {
    if(err) return console.error(err);

    // Get information about messages
    /*
    api.getThreadList(1000, null, ["INBOX"], (err, list) => {
        //interesting: messageCount, unreadCount (pull those up)
    	//console.log(list);
        fs.writeFile('data/large_messageData.txt', JSON.stringify(list), function (err) {
          if (err) throw err;
          console.log('Saved messages!');
        });


    });*/
/*
    // Get information about friends
    api.getFriendsList((err, data) => {
        if(err) return console.error(err);

        fs.writeFile('data/friendsData.txt', JSON.stringify(data), function (err) {
          if (err) throw err;
          console.log('Saved friendList!');
        });
        
        //console.log(data);
    });	*/
});
