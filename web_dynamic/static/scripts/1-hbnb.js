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
}