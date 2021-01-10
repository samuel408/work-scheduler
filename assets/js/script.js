// date 
var day = moment();
$("#currentDay").html(day.format('dddd, MMMM Do'));
var  elements = {
    nine: [],
    ten: [],
    eleven: [],
    twelve: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: []
  }


    var loadElements = function() {
        //changes  array elements froms strings back to nomral data types
        elements = JSON.parse(localStorage.getItem("elements"));
      
        // if nothing in localStorage, create a new object to track all task status arrays
       
            // displays previously saved information
            $("#boxNine").html(elements.nine);
            $("#boxten").html(elements.ten);
            $("#boxEleven").html(elements.eleven);
            $("#boxTwelve").html(elements.twelve);
            $("#boxOne").html(elements.one);
            $("#boxTwo").html(elements.two);
            $("#boxThree").html(elements.three);
            $("#boxFour").html(elements.four);
            $("#boxFive").html(elements.five);


        }
        
// function audit() {
//     // get date from task element
 
  
//     // convert to moment object at 5:00pm
//     // var time = day.format("LT"); 

//     // remove any old classes from element
//     // $("#five").removeClass("bg-light");
//     var time = moment(day, "L").set("hour", 15);
//     // apply new class if task is near/over due date
// // for(var i = 0; i < 8; i++){
// // if (moment().isAfter(time)) {
// //         $("x").addClass("bg-dark");
    
//     //   else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     //     $(taskEl).addClass("list-group-item-warning");
//     //   }
// if (moment().isAfter())
    
    
//   };
function saveElements(){
    localStorage.setItem("elements", JSON.stringify(elements));

}
// var auditTask = function(taskEl) {
//   // get date from task element
//   var date = $(taskEl)
//     .find("span")
//     .text()
//     .trim();

//   // convert to moment object at 5:00pm
//   var time = moment(date, "L").set("hour", 17);

//   // remove any old classes from element
//   $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

//   // apply new class if task is near/over due date
//   if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(taskEl).addClass("list-group-item-warning");
//   }
// };
//   // audit task due dates every 30 minutes
// setInterval(function() {
//     $(".col-10").each(function() {
//       auditTask($(this));
//     });
//   }, 1000);
$(".button").click(function() {

      // gets users input then save in elements array
      elements.nine = $("#boxNine").val();
      elements.ten = $("#boxTen").val();
      elements.eleven = $("#boxEleven").val();
      elements.twelve = $("#boxTwelve").val();
      elements.one = $("#boxOne").val();
      elements.two = $("#boxTwo").val();
      elements.three = $("#boxThree").val();
      elements.four = $("#boxFour").val();
      elements.five = $("#boxFive").val();

//saves the arrays 
      saveElements();
    
  });
  //get elements from local storage
  loadElements();