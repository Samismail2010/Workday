$(document).ready(function() {
    //display current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    //save button event listener
    $(".saveBtn").on("click", function() { 
        // create variable for textarea
        var text = $(this).siblings(".description").val();
        //create variable for time-slot
        var time = $(this).parent().attr("id"); 

        //save variables in local storage
        localStorage.setItem(time, text);
    });

    //display saved local storage data
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 .description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));
    
    //function for time block past,present, future with color code
});
