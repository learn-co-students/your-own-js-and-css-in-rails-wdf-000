function hideWhenClicked(){
  $('#hide_this').bind("click", function(event){
    $('a').hide();
  });
}

$(document).ready(function(){
  hideWhenClicked();
});
