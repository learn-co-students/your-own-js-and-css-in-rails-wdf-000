function hideWhenClicked() {
  $('#hide_this').on('click', () => document.getElementById('hide_this').style.display = 'none')
}

$(document).ready(hideWhenClicked);
