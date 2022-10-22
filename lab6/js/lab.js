/*
* Author: Giovanni Lomeil <glomelim@ucsc.edu>
* Author: Aakaash Narayannan <anaraya4@ucsc.edu>
* License: Public Domain
*/

//Define Variables
myTransport = ["Honda Civic", "Bus", "Bike", "Walk"];

myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "White",
  year: 2017,
  age: function() {
    return 2019 - age;
  }
}

// output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
