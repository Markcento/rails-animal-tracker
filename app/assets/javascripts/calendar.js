$(document).ready(function() {
   $("#calendar").fullCalendar({
     events: "/sightings/get_cal",
     header: {left: 'prev, next today', center: 'title', right: 'month, basicWeek, basicDay'},
     dayClick: function(date, allDay, jsEvent, view) { $('#calendar').fullCalendar('changeView', 'basicDay') },
     timeFormat: "LT",
    //  eventClick: function(event) {
    //    if (event.url) {
    //      window(event.url);
    //      return false;
    //    }
    //  }
  }); //ends fullCalendar
}); //ends ready
