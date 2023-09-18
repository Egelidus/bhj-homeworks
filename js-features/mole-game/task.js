const getHole = (index) => document.getElementById(`hole${index}`);
const win = document.getElementById("dead");
const loss = document.getElementById("lost");
for (let i = 0; i < 9; i++) {
  getHole(i).onclick = function () {
    if (getHole(i).className.includes("hole_has-mole")) {
      win.textContent++;
    } else {
      loss.textContent++;
    }
  };
}
if (win.textContent == 10) {
  win.textContent = 0;
  loss.textContent = 0;
  alert("Победа");
}
if (loss.textContent == 5) {
  win.textContent = 0;
  loss.textContent = 0;
  alert("Поражение");
}
