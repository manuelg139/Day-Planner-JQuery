
// Creating html file with divs for columns
// set up the time, text imput and save button for day planner
// disect css file and match existing classes with our HTML 
// give each element an id to be able to call in js file 
// Set up Timer using moment.js
//Set up local storage 





$(document).ready(function() {


//Moment.js date for top of page
function currentTime(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    setInterval(currentTime, 1000);
})

