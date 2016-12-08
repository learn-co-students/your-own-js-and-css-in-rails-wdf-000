function hideWhenClicked() {
  $('a').on('click', function(){
    $('#hide_this').hide();
  });
}

$(function() {
  hideWhenClicked();
}) 