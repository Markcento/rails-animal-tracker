$("document").ready(function(){

  $("#add_new_sighting_button").on(
  "click",
  function() {
    newSighting = {
      "sighting": {
        "date": $('#sighting_date').val(),
        "region": $('#sighting_region').val(),
        "animal_id": $('#lolz').val()
      }
    }

    $.ajax({
      dataType: 'json',
      url: '/sightings',
      method: 'POST',
      data: newSighting,

      success: function(data) {
        console.log(data);
        add_to_sightings_list(data);
      },

      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add New Sighting Failed: " + errorThrown);
      }
    }); //ends ajax
  }); //ends onclick function
}); //ends document ready

// function add_to_sightings_list(data) {
//   $("#calendar").append($(".fc-day") + data.date);
// }


function add_to_sightings_list(data) {
  $("#sightings_list").append('<tr><td>' + data.date + " " + data.region + '</td></tr>');
}
