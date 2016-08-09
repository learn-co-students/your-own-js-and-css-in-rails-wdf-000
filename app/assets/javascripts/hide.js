$(document).ready(function(){
  hideWhenClicked();
});

function hideWhenClicked() {
  $('#hide_this').click((event) => {
    $('#hide_this').hide();
  })
}
