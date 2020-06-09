$(function() {
    // creating today date
    var today = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(today);
    console.log(today);
    
    colorChange();
    

    function colorChange () {
    // creating current hour
    var currentHour = moment();
    var currentClock = currentHour.hour() + ':' + currentHour.minutes();
    currentClock = currentClock + ((currentHour.hour()) >= 12 ? ' pm' : ' am');
    var currentClockNum = parseInt(currentClock);
    console.log(currentClockNum);
    
    // Using if to match the current time
    
    $(".hour").each(function () {
        var hourNum = parseInt($(this).text())
        
        if (hourNum < currentClockNum) {
            $("input").removeClass("present");
            $("input").removeClass("future");
            $("input").addClass("past");
        } else if (hourNum == currentClockNum) {
            $("input").removeClass("past");
            $("input").removeClass("future");
            $("input").addClass("present");
        } else {
            $("input").removeClass("past");
            $().removeClass("present");
            $("input").addClass("future");
        }
        console.log(hourNum);
        });
    }


    $(".saveBtn").click(function() {
        words = $(this).siblings(".storage").val();
        console.log(words);
        hourInfo = $(this).siblings(".hour").text();
        console.log(hourInfo);
        localStorage.setItem(hourInfo, JSON.stringify(words));
        
    //     colorChange ();
        // renderText ();
    })
    
    function renderText () {
        var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
        $("#9").val("");
        $("#9").val(saveWords9);
        
        var saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
        $("#10").val("");
        $("#10").val(saveWords10);
        
        var saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
        $("#11").val("");
        $("#11").val(saveWords11);
        
        var saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
        $("#12").val("");
        $("#12").val(saveWords12);
        
        var saveWords1 = JSON.parse(localStorage.getItem("1:00 pm"));
        $("#13").val("");
        $("#13").val(saveWords1);
    
        var saveWords2 = JSON.parse(localStorage.getItem("2:00 pm"));
        $("#14").val("");
        $("#14").val(saveWords2);
    
        var saveWords3 = JSON.parse(localStorage.getItem("3:00 pm"));
        $("#15").val("");
        $("#15").val(saveWords3);
    
        var saveWords4 = JSON.parse(localStorage.getItem("4:00 pm"));
        $("#16").val("");
        $("#16").val(saveWords4);
    
        var saveWords5 = JSON.parse(localStorage.getItem("5:00 pm"));
        $("#17").val("");
        $("#17").val(saveWords5);
    }
    
    
    
    


    
    
});