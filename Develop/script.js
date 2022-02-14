
//this displays today's date in moment js
var Today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(Today);


//save btn click, gets values in jquery, and saves text in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".describe").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text); 
    })

//get current time the user is using page
    function Tracker() {
        var now = moment().format('h' );
        var ampm = moment().format('a');
        var pm ="pm"
        var temp = now;
        if(ampm == pm){
            now = parseInt(temp) + 12;
            return now;
        }
        //returning function
        return now;
}
//loops added to color cordinate and add past present future
    $(".time-block").each(function() {
        var color = parseInt($(this).attr("id").split("hour"));
        if (color < Tracker()) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (color == Tracker()){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
   

// get users saved items from localstorage if page refreshed or exited out of
    $("9 .describe").val(localStorage.getItem("9"));
    $("10 .describe").val(localStorage.getItem("10"));
    $("11 .describe").val(localStorage.getItem("11"));
    $("12 .describe").val(localStorage.getItem("12"));
    $("13 .describe").val(localStorage.getItem("13"));
    $("14 .describe").val(localStorage.getItem("14"));
    $("15 .describe").val(localStorage.getItem("15"));
    $("16 .describe").val(localStorage.getItem("16"));
    $("17 .describe").val(localStorage.getItem("17"));
    $("18 .describe").val(localStorage.getItem("18"));
    $("19 .describe").val(localStorage.getItem("19"));
    $("21 .describe").val(localStorage.getItem("20"));
    $("22 .describe").val(localStorage.getItem("21"));

})