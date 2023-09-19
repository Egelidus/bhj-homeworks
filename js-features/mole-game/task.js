const getHole = (index) => document.getElementById(`hole${index}`);
// const moleClass = getHole.className;
const win = document.getElementById("dead");
const loss = document.getElementById("lost");
document.getElementById("hole1").onclick = function () {
  if (document.getElementById("hole1").className == "hole_has-mole") {
    win.textContent++;
  } else {
    loss.textContent++;
  }
};

// getHole(1).onclick = function () {
//   if (getHole(1).className == "hole_has-mole") {
//     win.textContent++;
//   } else {
//     loss.textContent++;
//   }
// };

// }
// for (let i = 0; i < 9; i++) {
//   getHole(i).onclick = function () {
// }

if (win.textContent === 10) {
  win.textContent = 0;
  loss.textContent = 0;
  alert("Победа");
}
if (loss.textContent > 5) {
  win.textContent = 0;
  loss.textContent = 0;
  alert("Поражение");
}
