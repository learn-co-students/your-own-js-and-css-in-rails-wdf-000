function hideWhenClicked() {
  // $('#hide_this').bind("click", function(event) {
  //   event.preventDefault();
  //   $('#hide_this').style.visibility = "hidden";
$("#hide_this").click(function(event) {
    event.preventDefault();
    $("#hide_this").hide()
  });
}

$(document).ready(function() {
  hideWhenClicked();
})
