$(document).ready(function () {
  // Variable to store IDs of checked Amenities
  const amenitiesChecked = {};
  // Function to update the h4 tag with the list of checked amenities
  function updateAmenities () {
    const amenitiesList = Object.keys(amenitiesChecked).map(function (key) {
      return amenitiesChecked[key];
    }).join(', ');
    // console.log(amenitiesList);
    $('.amenities h4').text(amenitiesList);
  }

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      // if the checkbox is checked, store the Amenity ID
      amenitiesChecked[amenityId] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity ID
      delete amenitiesChecked[amenityId];
    }
    // Update the h4 tag with the list of checked amenities
    updateAmenities();
  });
});
