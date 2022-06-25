$(document).ready(function() { 
    //display current time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))

    $(".saveBtn").on("click",function(){
        var text = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, text)
    })
    //display saved local storage data
    $("#text08").val(localStorage.getItem("hr08"))    
    $("#text09").val(localStorage.getItem("hr09"))
    $("#text10").val(localStorage.getItem("hr10"))
    $("#text11").val(localStorage.getItem("hr11"))
    $("#text12").val(localStorage.getItem("hr12"))
    $("#text01").val(localStorage.getItem("hr01"))
    $("#text02").val(localStorage.getItem("hr02"))
    $("#text03").val(localStorage.getItem("hr03"))
    $("#text04").val(localStorage.getItem("hr04"))
    $("#text05").val(localStorage.getItem("hr05"))

    //change CSS styling based on time of day compared to calender
    function timeCompare(){

    //8AM
    var hr08 = moment({h:8})
        $("hour08").append(hr08)
        $("hour08").text(moment({h:8}).format('h a'))

        if (moment().isAfter(hr08, 'hour')) {
            $(".time-block08").addClass("past")
            $(".time-block08").removeClass("present")
            $(".time-block08").removeClass("future")
        }

        else if (moment().isBefore(hr08, 'hour')) {
            $(".time-block08").removeClass("past")
            $(".time-block08").removeClass("present")
            $(".time-block08").addClass("future")
        }
        
        else {
            $(".time-block08").removeClass("past")
            $(".time-block08").addClass("present")
            $(".time-block08").removeClass("future")        
    }
    //9AM
    var hr09 = moment({h:9})
            $("hour09").append(hr09)
            $("hour09").text(moment({h:9}).format('h a'))
    
        if (moment().isAfter(hr09, 'hour')) {
            $(".time-block09").addClass("past")
            $(".time-block09").removeClass("present")
            $(".time-block09").removeClass("future")
            }
    
        else if (moment().isBefore(hr08, 'hour')) {
            $(".time-block09").removeClass("past")
            $(".time-block09").removeClass("present")
            $(".time-block09").addClass("future")
            }
            
        else {
            $(".time-block09").removeClass("past")
            $(".time-block09").addClass("present")
            $(".time-block09").removeClass("future")        
        }
    //10AM
    var hr10 = moment({h:10})
        $("hour10").append(hr10)
        $("hour10").text(moment({h:10}).format('h a'))

        if (moment().isAfter(hr10, 'hour')) {
            $(".time-block10").addClass("past")
            $(".time-block10").removeClass("present")
            $(".time-block10").removeClass("future")
        }

        else if (moment().isBefore(hr10, 'hour')) {
            $(".time-block10").removeClass("past")
            $(".time-block10").removeClass("present")
            $(".time-block10").addClass("future")
        }
        
        else {
            $(".time-block10").removeClass("past")
            $(".time-block10").addClass("present")
            $(".time-block10").removeClass("future")        
    }
    //11AM
    var hr11 = moment({h:11})
        $("hour11").append(hr11)
        $("hour11").text(moment({h:11}).format('h a'))

        if (moment().isAfter(hr11, 'hour')) {
            $(".time-block11").addClass("past")
            $(".time-block11").removeClass("present")
            $(".time-block11").removeClass("future")
        }

        else if (moment().isBefore(hr11, 'hour')) {
            $(".time-block11").removeClass("past")
            $(".time-block11").removeClass("present")
            $(".time-block11").addClass("future")
        }
        
        else {
            $(".time-block11").removeClass("past")
            $(".time-block11").addClass("present")
            $(".time-block11").removeClass("future")        
    }    
    //12PM
    var hr12 = moment({h:12})
        $("hour12").append(hr12)
        $("hour12").text(moment({h:12}).format('h a'))

        if (moment().isAfter(hr12, 'hour')) {
            $(".time-block12").addClass("past")
            $(".time-block12").removeClass("present")
            $(".time-block12").removeClass("future")
        }

        else if (moment().isBefore(hr12, 'hour')) {
            $(".time-block12").removeClass("past")
            $(".time-block12").removeClass("present")
            $(".time-block12").addClass("future")
        }
        
        else {
            $(".time-block12").removeClass("past")
            $(".time-block12").addClass("present")
            $(".time-block12").removeClass("future")        
    }  
    //1PM
    var hr01 = moment({h:13})
        $("hour01").append(hr01)
        $("hour01").text(moment({h:13}).format('h a'))

        if (moment().isAfter(hr01, 'hour')) {
            $(".time-block01").addClass("past")
            $(".time-block01").removeClass("present")
            $(".time-block01").removeClass("future")
        }

        else if (moment().isBefore(hr01, 'hour')) {
            $(".time-block01").removeClass("past")
            $(".time-block01").removeClass("present")
            $(".time-block01").addClass("future")
        }
        
        else {
            $(".time-block01").removeClass("past")
            $(".time-block01").addClass("present")
            $(".time-block01").removeClass("future")        
    }  
    //2PM
    var hr02 = moment({h:14})
        $("hour02").append(hr02)
        $("hour02").text(moment({h:14}).format('h a'))

        if (moment().isAfter(hr02, 'hour')) {
            $(".time-block02").addClass("past")
            $(".time-block02").removeClass("present")
            $(".time-block02").removeClass("future")
        }

        else if (moment().isBefore(hr02, 'hour')) {
            $(".time-block02").removeClass("past")
            $(".time-block02").removeClass("present")
            $(".time-block02").addClass("future")
        }
        
        else {
            $(".time-block02").removeClass("past")
            $(".time-block02").addClass("present")
            $(".time-block02").removeClass("future")        
    } 
    //3PM
    var hr03 = moment({h:15})
        $("hour03").append(hr03)
        $("hour03").text(moment({h:15}).format('h a'))

        if (moment().isAfter(hr03, 'hour')) {
            $(".time-block03").addClass("past")
            $(".time-block03").removeClass("present")
            $(".time-block03").removeClass("future")
        }

        else if (moment().isBefore(hr03, 'hour')) {
            $(".time-block03").removeClass("past")
            $(".time-block03").removeClass("present")
            $(".time-block03").addClass("future")
        }
        
        else {
            $(".time-block03").removeClass("past")
            $(".time-block03").addClass("present")
            $(".time-block03").removeClass("future")        
    } 
    //4PM
    var hr04 = moment({h:16})
        $("hour04").append(hr03)
        $("hour04").text(moment({h:16}).format('h a'))

        if (moment().isAfter(hr04, 'hour')) {
            $(".time-block04").addClass("past")
            $(".time-block04").removeClass("present")
            $(".time-block04").removeClass("future")
        }

        else if (moment().isBefore(hr04, 'hour')) {
            $(".time-block04").removeClass("past")
            $(".time-block04").removeClass("present")
            $(".time-block04").addClass("future")
        }
        
        else {
            $(".time-block04").removeClass("past")
            $(".time-block04").addClass("present")
            $(".time-block04").removeClass("future")        
    } 
    //5PM
    var hr05 = moment({h:17})
        $("hour05").append(hr05)
        $("hour05").text(moment({h:17}).format('h a'))

        if (moment().isAfter(hr05, 'hour')) {
            $(".time-block05").addClass("past")
            $(".time-block05").removeClass("present")
            $(".time-block05").removeClass("future")
        }

        else if (moment().isBefore(hr05, 'hour')) {
            $(".time-block05").removeClass("past")
            $(".time-block05").removeClass("present")
            $(".time-block05").addClass("future")
        }
        
        else {
            $(".time-block05").removeClass("past")
            $(".time-block05").addClass("present")
            $(".time-block05").removeClass("future")        
    } 
}
timeCompare()
})







// //time slot variables
// const hr01 = $("#hour01").text()
// const hr02 = $("#hour02").text()
// const hr03 = $("#hour03").text()
// const hr04 = $("#hour04").text()
// const hr05 = $("#hour05").text()
// const hr06 = $("#hour06").text()
// const hr07 = $("#hour07").text()
// const hr08 = $("#hour08").text()
// const hr09 = $("#hour09").text()
// const hr10 = $("#hour10").text()

// // //Save Events to Locale Storage
// // $('btn01').on(.click,function() {
// //     if ($('text01').val()) {
// //         localStorage.removeItem('text01')
// //     }
// //     localStorage.setItem(hr01, $('text01').val())
// //     })

