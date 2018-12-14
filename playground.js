const fs = require("fs");
const {Transform} = require('stream');


fs.readS('data/conversations.json', function(err, data) {
    console.log(JSON.stringify(data));
    // For every entry in object stream into a new file
});


/* Format

[ { type: 'message',
    attachments: [],
    body: 'Lol I\'m going on a date with my TA',
    isGroup: false,
    messageID: 'mid.$cAAAAAAQ5kEpt0CDzSFnntuoTU8D9',
    senderID: '100000363247997',
    threadID: '100000295643447',
    timestamp: '1544558455624',
    mentions: {},
    isUnread: false,
    messageReactions: [],
    isSponsored: false,
    snippet: undefined },
  { type: 'message',
    attachments: [],
    body: 'TA game',
    isGroup: false,
    messageID: 'mid.$cAAAAAAQ5kEpt0CE3XlnntvsYeJfB',
    senderID: '100000363247997',
    threadID: '100000295643447',
    timestamp: '1544558473054',
    mentions: {},
    isUnread: false,
    messageReactions: [],
    isSponsored: false,
    snippet: undefined }]

    */
