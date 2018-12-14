const login = require("facebook-chat-api");
const fs = require("fs");
require('dotenv').config()

// Login to Facebook
login({email: process.env.EMAIL, password: process.env.PASSWORD}, (err, api) => {
    if(err) return console.error(err);

    // GET all messages from every thread (conversation)
    function getMessageHistory(threadID, callback) { // Pass in callback to perform action
        let timestamp = undefined;
        let messageHistory = [];
        function loadNextThreadHistory(api){
            console.log(`Fetching messages in thread ${threadID}...`);
            api.getThreadHistory(threadID, 9000, timestamp, (err, history) => { // TODO change number of messages fetched and make recursive
                if(err) {
                    console.error(err);
                    return;
                }
                // Since the timestamp is from a previous loaded message,
                // that message will be included in this history so we can discard it unless it is the first load.
                
                if(timestamp != undefined) history.pop();

                // Iterate until last message
                if(history.length != 0) {
                    messageHistory.concat(history); // Handle message history
                    timestamp = history[0].timestamp; // Handle timestamp
                    callback(history)
                    //loadNextThreadHistory(api);
                }
                //else callback(messageHistory);
            });
        }

        loadNextThreadHistory(api);
    }
    
    fs.readFile('data/large_messageData.txt', function(err, data) {
        const threadList = JSON.parse(data);
        const thread_info = {};

        const threads = threadList.map((thread) => {
            if(thread.threadID != null) return new Promise((resolve, reject) => setTimeout(getMessageHistory, ((Math.random()*1000)), thread.threadID, function(messageList){
                console.log(`Attempting to write into file ${thread.threadID}.json...`);
                const writeStream = fs.createWriteStream(`data/messages/${thread.threadID}.json`);
                writeStream.on("close", () => console.log("Finished writing messages"));
                writeStream.write(JSON.stringify(messageList));
                console.log("Attempting to close file")
                writeStream.close();
                //thread_info[thread.threadID] = messageList;
                resolve();
            }));
        });

        Promise.all(threads).then(() => console.log("Finished writing messages into all files"));
    });
    
    //getMessageHistory("100000295643447", (messageList) => console.log(messageList)); // USED FOR TESTING (small convo - 100009119117375, large convo - 100000295643447)
    /*

    // GET list of threads (conversations)
    api.getThreadList(1000, null, ["INBOX"], (err, list) => {
        //interesting: messageCount, unreadCount (pull those up)
    	//console.log(list);
        fs.writeFile('data/large_messageData.txt', JSON.stringify(list), function (err) {
          if (err) throw err;
          console.log('Saved messages!');
        });
    });

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
