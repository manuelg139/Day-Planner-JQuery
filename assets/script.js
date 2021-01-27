
// Creating html file with divs for columns
// set up the time, text imput and save button for day planner
// disect css file and match existing classes with our HTML 
// give each element an id to be able to call in js file 
// Set up Timer using moment.js
//adding a color coding fuction with if statments
//Set up local storage and save inputs when refreshing the page




$(document).ready(function() {


    //Moment.js date for top of page
    function currentTime(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };


    function colorTime(){
        $("textarea").each(function(){
            let hour = moment().hours();
            let hourStamp = $(this).attr("id");
            let inputNum = parseInt(hourStamp);

            if (inputNum === hour){
                $(this).addClass("present");
            } else if(inputNum < hour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };


colorTime();
setInterval(currentTime, 1000);

});







