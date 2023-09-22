let modalMain = document.getElementById("modal_main");
modalMain.className = "modal modal_active";
let arrModalClose = document.getElementsByClassName("modal__close_times");
let arrButton = document.getElementsByClassName("btn");
let modalSuccess = document.getElementById("modal_success");
arrModalClose.item(0).onclick = () => (modalMain.className = "modal");
arrButton.item(0).onclick = () => {
  modalMain.className = "modal";
  modalSuccess.className = "modal modal_active";
};
arrModalClose.item(1).onclick = () => (modalSuccess.className = "modal");
arrButton.item(1).onclick = () => {
  modalSuccess.className = "modal";
};