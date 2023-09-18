const clicker = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter")
clicker.onclick = function() {
  clicker.width = 230;
  clickerCounter.textContent++;
}
// clicker.onclick = null;
// clicker.onclick = function() {
//   clicker.width = 200;
//   clickerCounter.textContent++;
// }
// clicker.onclick = null;