let button = document.querySelector(".dropdown__value");
let menu = document.querySelector(".dropdown__list")
let submenu = document.querySelectorAll(".dropdown__item");
button.onclick = () => {
  menu.className = "dropdown__list dropdown__list_active";
}
submenu[0].onclick = () => {
    menu.className = "dropdown__list";
    button.textContent = "JavaScript";
}
submenu[1].onclick = () => {
    menu.className = "dropdown__list";
    button.textContent = "PHP";
}
submenu[2].onclick = () => {
    menu.className = "dropdown__list";
    button.textContent = "Python";
}
submenu[3].onclick = () => {
    menu.className = "dropdown__list";
    button.textContent = "Fortran";
}
