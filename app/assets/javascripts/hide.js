$(document).ready( function(){
  hideWhenClicked();
});
function hideWhenClicked() {
  $('#hide_this').on('click', function(event){
    event.preventDefault();
    $('#hide_this').hide();    
  });
}
