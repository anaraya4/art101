/*
* Author: Giovanni Lomeil <glomelim@ucsc.edu>
* Author: Aakaash Narayannan <anaraya4@ucsc.edu>
* License: Public Domain
*/
var outputEl = document.getElementById("output");


var new1El = document.createElement("p");
new1El.innerHTML = "Hello, Our names are Gio and Aakaash.";
outputEl.appendChild(new1El);
new1El.style.color='blue';

var new2El = document.createElement("p");
new2El.innerHTML = "Gio and Aakaash love pizza.";
outputEl.appendChild(new2El);
new2El.style.fontSize="20pt";
