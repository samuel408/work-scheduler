// date 
var day = moment();
$("#currentDay").html(day.format('dddd, MMMM Do'));
// var elements  = {};

// if (!elements) {
//     events = {
//       nine: [],
//       ten: [],
//       eleven: [],
//       twelve: [],
//       one: [],
//       two: [],
//       three: [],
//       four: [],
//       five: []

//     };
  
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
var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl)
    .find("span")
    .text()
    .trim();

  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 17);

  // remove any old classes from element
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  } else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }
};
  // audit task due dates every 30 minutes
setInterval(function() {
    $(".col-10").each(function() {
      auditTask($(this));
    });
  }, 1000);