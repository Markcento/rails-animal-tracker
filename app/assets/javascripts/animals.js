$("document").ready(function(){

  $("#add_new_animal_button").on(
  "click",
  function() {
    newAnimal = {
      "animal": {
        "common_name": $('#animal_common_name').val(),
        "latin_name": $('#animal_latin_name').val(),
        "kingdom": $('#animal_kingdom').val()
      }
    }

    $.ajax({
      dataType: 'json',
      url: '/animals',
      method: 'POST',
      data: newAnimal,

      success: function(data) {
        console.log(data);
        add_to_animals_list(data);
      },

      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add New Animal Failed: " + errorThrown);
      }
    }); //ends ajax
  }); //ends onclick function
}); //ends document ready

function add_to_animals_list(data) {
  $("#animals_list").append('<tr><td>' + data.common_name + '</td><td>' + data.latin_name + '</td><td>' + data.kingdom + '</td><td>' + '<a href="/animals/show' + data.id + '"' + '>Show</a></td><td>' + '<a href="/animals/edit' + data.id + '"' + '>Edit</a></td>' + '<td>' + '<a rel="nofollow" data-method="delete" href="/animals/' + data.id + '"' + '>Destroy</a></td></tr>');
}
