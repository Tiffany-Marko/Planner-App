// // // ## Acceptance Criteria

// // ```md
// // GIVEN I am using a daily planner to create a schedule
// // WHEN I open the planner
// // THEN the current day is displayed at the top of the calendar DONE
// // WHEN I scroll down
// // THEN I am presented with timeblocks for standard business hours DONE
// // WHEN I view the timeblocks for that day
// // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// // WHEN I click into a timeblock Done
// // THEN I can enter an event Done
// // WHEN I click the save button for that timeblock Done
// // THEN the text for that event is saved in local storage Done
// // WHEN I refresh the page
// // THEN the saved events persist
// // $(document).ready(function () { 

// // });
var currentDate = new Date() //date is a built in JavaScript Object (some objects need "new" to access them)
var currentHour = currentDate.getHours()



// var timeBlocksArray = document.querySelectorAll(".time-block") //array to get all elements of this else
// console.log(timeBlocksArray) //each timeblock is its own object (represents HTML on the page)

// timeBlocksArray = Array.from(timeBlocksArray) // 
// //only needed to fix a bug
// for (let i = 0; i < timeBlocksArray.length; i++) { //i defines a temporary var; it initializes it to 0. i< defines the end condition.
//     //i++ tells me how i changes on every instance of this loop. ++ increases the value of i by 1. 
//     //text += cars[i] + "<br>"; 

//     // var sampleArray = ["a", "b", "c", 1, 2, 3]
//     // sampleAarray[2] === "c"
//     // sampleArray[4]
//     var timeBlock = timeBlocksArray[i];

//     if(currentHour > parseInt(timeBlock.id)) {
//         timeBlock.classList.add("past") //adds class to timeblock in the past
    
//     }
//     else if(currentHour === parseInt(timeBlock.id)){
//         timeBlock.classList.add("present")

//     }
//     else {
//         timeBlock.classList.add("future")

//     }
//     }


    $(".time-block").each(function(){ //$ is the equivalent of document.querySelectorAll in Vanilla JS
        //.each is the equivalent of a for loop
         //this refers to each element in the array
         if(currentHour > parseInt($(this).attr("id"))) {
            $(this).addClass("past") //adds class to timeblock in the past
            //$(this) is each element in the array
        
        }
        else if(currentHour === parseInt($(this).attr("id"))){
            $(this).addClass("present")
    
        }
        else {
            $(this).addClass("future")
    
        }
        
        
    })

$("#currentDay").text(moment().format("dddd, MMMM Do")); //adds the current date

function saveBtnHandler() {
let activityText = $(this).siblings(".description").val(); //this grabs the text value. use down property of sibling to get nearest description to the save button
console.log("activityText = ", activityText); //displays value in console
let activityTime = $(this).parent().attr("id");
console.log("activityTime = ", activityTime); //this is grabbing the time value
localStorage.setItem(activityTime, activityText); //saves to local storage 
}

$(".saveBtn").on("click", saveBtnHandler); //instructs the button to call saveBtnHandler when it is clicked

//grab the text area using jQuery and fill it with the text for that time block from local storage
$('#9 .description').val(localStorage.getItem('9')); 
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15')); 
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
