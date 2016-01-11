var fs = require("fs");

var data = fs.readFileSync('message.txt');

console.log(data.toString());
console.log("Program Ended");