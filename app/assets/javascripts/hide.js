var hidden = document.getElementById("hide_this");

hidden.addEventListener('click', hideWhenClicked)

function hideWhenClicked() {
  console.log(hidden)
  hidden.style.display = "none";
}