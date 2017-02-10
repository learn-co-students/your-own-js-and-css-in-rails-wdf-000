$(document).ready(function() {
  // $('a').addClass('error')
  $('#hide_this').on('click', hideWhenClicked);
});

function hideWhenClicked() {
  $(this).hide();
}