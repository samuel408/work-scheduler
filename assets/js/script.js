// date 
var day = moment(new Date());
$("#currentDay").html(day.format('dddd, MMMM Do'));
var elements  = {};

if (!elements) {
    events = {
      nine: [],
      ten: [],
      eleven: [],
      twelve: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: []

    };
  }