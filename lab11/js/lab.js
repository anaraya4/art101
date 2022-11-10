/*
* Author: Aakaash Narayannan <anaraya4@ucsc.edu>
* License: Public Domain
*/

$('#Challenges').append(
    $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Click me please',
        class: 'btn-styled',
  })
);
$( "#Challenges" ).click(function() {
  alert( "You have clicked me" );
});
