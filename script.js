var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todayDate);

var timeTracker = function() {
    //get current hour from moment.js
    var currentHour = moment().format("h A");
    // var currentHour = moment().hour();
    console.log(currentHour)
 // adding time-block funtion to select the time for past, present, future 
   $(".time-block").each(function() {
        var blockTime = $(this).attr("id");

        console.log(blockTime);


        if (blockTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
   })
}
// adding save button to the save the changes on the localstoage.
var saveContent = function() {
    $(".saveBtn").on("click", function(){
        
        var time = $(this).parent().attr("id");
        var content = $(this).siblings(".description").val();
// localstoage set
        localStorage.setItem(time, content);

    })
}

// localstoage get
    $("#8 AM .description").val(localStorage.getItem("8 AM"));
    $("#9 AM .description").val(localStorage.getItem("9 AM"));
    $("#10 AM .description").val(localStorage.getItem("10 AM"));
    $("#11 AM .description").val(localStorage.getItem("11 AM"));
    $("#12 PM .description").val(localStorage.getItem("12 PM"));
    $("#1 PM .description").val(localStorage.getItem("1 PM"));
    $("#2 PM .description").val(localStorage.getItem("2 PM"));
    $("#3 PM .description").val(localStorage.getItem("3 PM"));
    $("#4 PM .description").val(localStorage.getItem("4 PM"));
    $("#5 PM .description").val(localStorage.getItem("5 PM"));


timeTracker();
saveContent();


