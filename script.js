$(function () {
    // creating today date
    var today = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(today);

    // creating current hour
    var currentHour = moment();
    var time = currentHour.hour() + ':' + currentHour.minutes();
        time = time + ((currentHour.hour()) >= 12 ? ' pm' : ' am');
    var timeNum = parseInt(time);
    
    // Using if to match the current time
    
    $(".hour").each(function () {
        var hourNum = parseInt($(this).text())
        
        if (hourNum < timeNum) {
            $("textarea").addClass("past");
        } else if (hourNum = timeNum) {
            $("textarea").addClass("present");
        } else {
            $("textarea").addClass("future");
        }
        console.log(hourNm);
            
        });
    
    
    // $(hourNum).each(function (hourNum) {
        
        
        
    // });
    


    
    
});