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
    
    //function for time block past,present, future with color code/color tags are located in CSS
    function timeColor(){
        var presentTime = moment().hour();

        $(".time-block").each(function(){
            var hourBlock = parseInt($(this).attr("id").split("block")[1]);

            //adding class/past time will show grey
            if (hourBlock < presentTime){
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            // to show ergency, current time will glow red
            else if (hourBlock === presentTime){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            // if time is in future time block will glow green
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeColor();
});
