$(document).ready(function() {
    // creating today date
    var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").append(today);
    // console.log(today);
    
    function colorChange() {
        // creating current hour
        var currentHour = moment().hours();
        // console.log(currentHour);

        // creating color for past, present and future
        $(".time-block").each(function () {
            var hourNum = parseInt($(this).attr("id"));

            console.log(hourNum, currentHour);

            // Comparing the time
            if (hourNum < currentHour) {
                $(this).addClass("past");
            } else if (hourNum === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    }

    colorChange();

    // Save textArea in local storage
    // var saves = setInterval(colorChange, 15000);
    $(".saveBtn").click(function () { 
        // console.log(this);
        var text = $(this).siblings(".storage").val();
        var time = $(this).parent().attr("id");
        // console.log(text, time);
        localStorage.setItem(time, text);
        console.log(text);
    });

    $("#9 .storage").val(localStorage.getItem("9"));
    $("#10 .storage").val(localStorage.getItem("10"));
    $("#11 .storage").val(localStorage.getItem("11"));
    $("12 .storage").val(localStorage.getItem("12"));
    $("#1 .storage").val(localStorage.getItem("1"));
    $("#2 .storage").val(localStorage.getItem("2"));
    $("#3 .storage").val(localStorage.getItem("3"));
    $("#4 .storage").val(localStorage.getItem("4"));
    $("#5 .storage").val(localStorage.getItem("5"));

    // $("#currentDay").text(moment().format('YYYY MM DD'));
    $(".btn-danger").click(function() {
    $("textarea").val("");
    });
});