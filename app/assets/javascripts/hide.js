function hideWhenClicked() {
  $("#hide_this").click(function(event) {
    event.preventDefault();
    $("#hide_this").hide()
  });
}

$(document).ready(function() {
  hideWhenClicked();
})
