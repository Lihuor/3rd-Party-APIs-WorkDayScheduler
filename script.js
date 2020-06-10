$(function() {
    // creating today date
    var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").append(today);
    // console.log(today);
    
    function colorChange() {
    // creating current hour
    var currentHour = parseInt(moment().format("H"));
    // console.log(currentHour);

    // creating color for past, present and future
    $(".hour").each(function (index, value) {
        var hourNum = parseInt($(this).text())
        // console.log(hourNum, currentHour)

        // Comparing the time
        if (hourNum < currentHour) {
            $(".storage").addClass("past");
            $(".storage").removeClass("present");
            $(".storage").removeClass("future");
        } else if (hourNum === currentHour) {
            $(".storage").removeClass("past");
            $(".storage").addClass("present");
            $(".storage").removeClass("future");
        } else {
            $(".storage").removeClass("past");
            $(".storage").removeClass("present");
            $(".storage").addClass("future");
        }
    });

    }

    colorChange();
    // var currentClock = currentHour.hour() + ':' + currentHour.minutes();
    // currentClock = currentClock + ((currentHour.hour()) >= 12 ? ' pm' : ' am');
    // var currentClockNum = parseInt(currentClock);
    // console.log(currentClockNum);

    // colorChange();
    

    // function colorChange () {
    // // creating current hour
    
    // // Using if to match the current time
    
    // $(".hour").each(function () {
    //     var hourNum = parseInt($(this).text())
        
    //     if (hourNum < currentClockNum) {
    //         $("input").removeClass("present");
    //         $("input").removeClass("future");
    //         $("input").addClass("past");
    // } else if (hourNum == currentClockNum) {
    //     $("input").removeClass("past");
    //     $("input").removeClass("future");
    //     $("input").addClass("present");
    // } else {
    //     $("input").removeClass("past");
    //     $().removeClass("present");
    //     $("input").addClass("future");
    // }
    //     console.log(hourNum);
    //     });
    // }

    // $(".fa-save").click(function () { 
    //     var comment = $.trim($("#9").val());
    //     // store Data
    //     localStorage.setItem();
    // });

    // $(".saveBtn").click(function() {
    //     words = $(this).siblings(".storage").val();
    //     console.log(words);
    //     hourInfo = $(this).siblings(".hour").text();
    //     console.log(hourInfo);
    //     localStorage.setItem(hourInfo, JSON.stringify(words));
        
    // //     colorChange ();
    //     // renderText ();
    // })
    
    // function renderText () {
    //     var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
    //     $("#9").val("");
    //     $("#9").val(saveWords9);
        
    //     var saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
    //     $("#10").val("");
    //     $("#10").val(saveWords10);
        
    //     var saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
    //     $("#11").val("");
    //     $("#11").val(saveWords11);
        
    //     var saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
    //     $("#12").val("");
    //     $("#12").val(saveWords12);
        
    //     var saveWords1 = JSON.parse(localStorage.getItem("1:00 pm"));
    //     $("#13").val("");
    //     $("#13").val(saveWords1);
    
    //     var saveWords2 = JSON.parse(localStorage.getItem("2:00 pm"));
    //     $("#14").val("");
    //     $("#14").val(saveWords2);
    
    //     var saveWords3 = JSON.parse(localStorage.getItem("3:00 pm"));
    //     $("#15").val("");
    //     $("#15").val(saveWords3);
    
    //     var saveWords4 = JSON.parse(localStorage.getItem("4:00 pm"));
    //     $("#16").val("");
    //     $("#16").val(saveWords4);
    
    //     var saveWords5 = JSON.parse(localStorage.getItem("5:00 pm"));
    //     $("#17").val("");
    //     $("#17").val(saveWords5);
    // }
    
    
    
    


    
    
});