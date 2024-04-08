$(document).ready(function() {
  function loadPlaces() {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5001/api/v1/places_search',
      contentType: 'application/json',
      data: JSON.stringify({}),
      success: function(response) {
        $('.places').empty();
        $.each(response, function(index, place) {
          const article = '<article>' +
            '<div class="title_box">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night">$' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
            '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
            '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
            '</div>' +
            '<div class="description">' + place.description + '</div>' +
            '</article>';
          $('.places').append(article);
        });
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }

  loadPlaces();

  // Add click event listener to the button
  $('button[type="button"]').click(function() {
    const selectedAmenities = $('.amenities input:checked');

    const amenityIds = [];
    selectedAmenities.each(function() {
      amenityIds.push($(this).data('id'));
    });

    const data = {
      amenities: amenityIds
    };

    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5001/api/v1/places_search',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        $('.places').empty();
        $.each(response, function(index, place) {
          const article = '<article>' +
            '<div class="title_box">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night">$' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
            '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
            '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
            '</div>' +
            '<div class="description">' + place.description + '</div>' +
            '</article>';
          $('.places').append(article);
        });
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  });
});
