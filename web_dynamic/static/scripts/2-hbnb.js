document.ready(function () {
    const amenityDict = {};
    $('li input[type=checkbox]').change(function () {
      if ($(this).is(':checked')) {
        amenityDict[this.dataset.id] = this.dataset.name;
      } else {
        delete amenityDict[this.dataset.id];
      }
      $('.amenities h4').text(Object.values(amenityDict).join(', '));
    });

    // get status of api
    $.getJSON("http://0.0.0.0/api/v1/status/", function(data) {
        if (data.status === "OK") {
            $("#api_status").addClass("available");
        } else {
            $("#api_status").removeClass("available");
        }
    }
}