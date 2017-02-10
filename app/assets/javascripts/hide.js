function hideWhenClicked() {
  $('#hide_this').on('click', function(event) {
    $('#hide_this').hide();
    event.preventDefault();
  });
}

$(document).ready(function() {
  hideWhenClicked();
});
