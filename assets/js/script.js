// date 
var day = moment();
$("#currentDay").html(day.format('dddd, MMMM Do'));
var  elements = {}
  
    var loadElements = function() {
        //changes  array elements froms strings back to nomral data types
        elements = JSON.parse(localStorage.getItem("elements"));
      
        // if nothing in localStorage, create a new object to track all task status arrays
    if(!elements){
        elements = {
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
    }
            // displays previously saved information
            $("#boxNine").html(elements.nine);
            $("#boxTen").html(elements.ten);
            $("#boxEleven").html(elements.eleven);
            $("#boxTwelve").html(elements.twelve);
            $("#boxOne").html(elements.one);
            $("#boxTwo").html(elements.two);
            $("#boxThree").html(elements.three);
            $("#boxFour").html(elements.four);
            $("#boxFive").html(elements.five);

        }

function saveElements(){
    localStorage.setItem("elements", JSON.stringify(elements));
}

var checkTime = function() {
// sets up each variable with a certain time
    var nine = moment(day,"LT").set("hour",9) ;
    var ten = moment(day,"LT").set("hour",10) ;
    var eleven = moment(day,"LT").set("hour",11) ;
    var twelve = moment(day,"LT").set("hour",12) ;
    var one = moment(day,"LT").set("hour",13) ;
    var two = moment(day,"LT").set("hour",14) ;
    var three = moment(day,"LT").set("hour",15) ;
    var four = moment(day,"LT").set("hour",16) ;
    var five = moment(day,"LT").set("hour",17) ;
    var six = moment(day,"LT").set("hour",18);

    // checks if time is before or after the current time then changes colors according

//nine o'clock

 if( moment().isAfter(nine) && moment().isBefore(ten)){
    $("#nine").removeClass("bg-light");
    $("#nine").addClass("bg-light");
}
 else if (moment().isAfter(nine)){
    $("#nine").removeClass("bg-light");
    $("#nine").addClass("bg-dark");
    }
    else if (moment().isBefore(nine)){
    $("#nine").removeClass("bg-light");
    $("#nine").addClass("bg-secondary");
    } 
//ten o'clock
    if( moment().isAfter(ten) && moment().isBefore(eleven)){
        $("#ten").removeClass("bg-light");
        $("#ten").addClass("bg-light");
    }
     else if (moment().isAfter(ten)){
        $("#ten").removeClass("bg-light");
        $("#ten").addClass("bg-dark");
        }
        else if (moment().isBefore(ten)){
        $("#ten").removeClass("bg-light");
        $("#ten").addClass("bg-secondary");
        } 
//eleven o'clock
        if( moment().isAfter(eleven) && moment().isBefore(twelve)){
            $("#eleven").removeClass("bg-light");
            $("#eleven").addClass("bg-light");
        }
         else if (moment().isAfter(eleven)){
            $("#eleven").removeClass("bg-light");
            $("#eleven").addClass("bg-dark");
            }
            else if (moment().isBefore(eleven)){
            $("#eleven").removeClass("bg-light");
            $("#eleven").addClass("bg-secondary");
            } 
//twelve o'clock
            if( moment().isAfter(twelve) && moment().isBefore(one)){
                $("#twelve").removeClass("bg-light");
                $("#twelve").addClass("bg-light");
            }
             else if (moment().isAfter(twelve)){
                $("#twelve").removeClass("bg-light");
                $("#twelve").addClass("bg-dark");
                }
                else if (moment().isBefore(twelve)){
                $("#twelve").removeClass("bg-light");
                $("#twelve").addClass("bg-secondary");
                } 
  // one o'clock              
                if( moment().isAfter(one) && moment().isBefore(two)){
                    $("#one").removeClass("bg-light");
                    $("#one").addClass("bg-light");
                }
                 else if (moment().isAfter(one)){
                    $("#one").removeClass("bg-light");
                    $("#one").addClass("bg-dark");
                    }
                    else if (moment().isBefore(one)){
                    $("#one").removeClass("bg-light");
                    $("#one").addClass("bg-secondary");
                    }
  //two o'clock                   
                    if( moment().isAfter(two) && moment().isBefore(three)){
                        $("#two").removeClass("bg-light");
                        $("#two").addClass("bg-light");
                    }
                     else if (moment().isAfter(two)){
                        $("#two").removeClass("bg-light");
                        $("#two").addClass("bg-dark");
                        }
                        else if (moment().isBefore(two)){
                        $("#two").removeClass("bg-light");
                        $("#two").addClass("bg-secondary");
                        }
//three o'clock 
                        if( moment().isAfter(three) && moment().isBefore(four)){
                            $("#three").removeClass("bg-light");
                            $("#three").addClass("bg-light");
                        }
                         else if (moment().isAfter(three)){
                            $("#three").removeClass("bg-light");
                            $("#three").addClass("bg-dark");
                            }
                            else if (moment().isBefore(three)){
                            $("#three").removeClass("bg-light");
                            $("#three").addClass("bg-secondary");
                            }
// four o'clock                             
                            if( moment().isAfter(four) && moment().isBefore(five)){
                                $("#four").removeClass("bg-light");
                                $("#four").addClass("bg-light");
                            }
                             else if (moment().isAfter(four)){
                                $("#four").removeClass("bg-light");
                                $("#four").addClass("bg-dark");
                                }
                                else if (moment().isBefore(four)){
                                $("#four").removeClass("bg-light");
                                $("#four").addClass("bg-secondary");
                                } 
//five o'clock                                
                                if( moment().isAfter(five) && moment().isBefore(six)){
                                    $("#five").removeClass("bg-light");
                                    $("#five").addClass("bg-light");
                                }
                                 else if (moment().isAfter(five)){
                                    $("#five").removeClass("bg-light");
                                    $("#five").addClass("bg-dark");
                                    }
                                    else if (moment().isBefore(five)){
                                    $("#five").removeClass("bg-light");
                                    $("#five").addClass("bg-secondary");
                                    } 
};  

  // audit task due dates every 10 minutes
setInterval(function() {
    checkTime();
  }, (1000 * 60) * 10);


$(".button").click(function() {

      // gets users input then save in elements array
      elements.nine= $("#boxNine").val();
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
  checkTime();
