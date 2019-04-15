function hideWhenClicked() {
  $("a").click(function(event) {
    event.preventDefault();
    $("#hide_this").hide();
  });
}

$(document).ready(function() {
  hideWhenClicked();
});
