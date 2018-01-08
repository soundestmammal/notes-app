console.log('Starting App.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
var robert = "This is me";


fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);
