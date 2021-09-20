function addingEventListener() {
    const input = document.getElementById('input');
function clickAlert() {
  alert('I was clicked!');
}
input.addEventListener('click', clickAlert); 
}
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);
  if (left < 360) {
      dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
      moveDodgerRight();
  }
});