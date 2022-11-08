/*
* Author: Giovanni Lomeil <glomelim@ucsc.edu>
* Author: Aakaash Narayannan <anaraya4@ucsc.edu>
* License: Public Domain
*/

function sortName() {
  var userName = window.prompt("Please tell me your name: ");
  console.log("username =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameSorted = ", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);

  return nameSorted;
}

document.writeln("Hey, I fixed your name: ",
  sortName(), "</br>");


var button = document.getElementById('my-button');
button.addEventListener('click', sortName(){
  inputValue = document.getElementById('user-name').value;
  console.log('You Input: ', inputValue);
})
