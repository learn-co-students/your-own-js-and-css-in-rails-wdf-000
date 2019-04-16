function hideWhenClicked(obj) {
  $('#hide_this').click(function(){
    $('#hide_this').hide()
  })
}

$(document).ready(function(){
  hideWhenClicked();
})
