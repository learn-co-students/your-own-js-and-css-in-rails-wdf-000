// $(function () {
// alert("fsdf");
//   $('#hide_this').click(function (e) {
//     alert("fsdfs");
//     hideWhenClicked();
//   });
// });


// alert("fsdf");
// $('#hide_this').click(function (e) {
//   // alert("fsdfs");
//   hideWhenClicked();
// });

$('#hide_this').click(hideWhenClicked);

// $('body').attr('id',"cool-background");
// $('body').addClass("cool-background");

function hideWhenClicked() {
  $('#hide_this').hide();
}
