//My first JavaScript program ever! Completely conceived on my own woth no prompt!

var totalLength;
var message1 = "There are "; 
var message2 = " characters in this message!";
var message3 = message1 + "  " + message2;
totalLength = message3.length;
message4 = message1 + totalLength + message2;
console.log(message4); //changed from document.write to console.log in order to have the next "program" run alone.

// Second JavaScript program design to receive a message and return that message with a charcter count.

var message5 = prompt("Hey enter a message and see how many characters it has.");
totalLength = message5.length
document.write("The message " + '"' + message5 + '"' + " has " + totalLength + " characters in it."); 