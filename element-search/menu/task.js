let menu = document.querySelectorAll(".menu__link");
let submenu = document.querySelectorAll("ul");
// for(let i = 0;  i > 10; i++) {
//   menu[i].onclick = () => {
//     submenu[2].className = "menu menu_sub menu_active"
//     return false;
//   }
// }
// for(item of menu) {
//   item.onclick = () => {
//     submenu[1].className = "menu menu_sub menu_active"
//   }
//   return false;
// }
menu[1].onclick = () => {
  submenu[1].className = "menu menu_sub menu_active"
  submenu[2].className = "menu menu_sub"
  return false;
}
menu[5].onclick = () => {
  submenu[2].className = "menu menu_sub menu_active"
  submenu[1].className = "menu menu_sub"
  return false;
}
