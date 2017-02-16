function hideWhenClicked(){
  $('a').on("click", function(){
    $('#hide_this').hide();
  });
}

$(document).ready(function(){
  hideWhenClicked();
})
