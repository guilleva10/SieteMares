//////////////////////////////////////////////////////MENU HAMBURGUESA//////////////////////////////////////////

var menu = document.querySelector(".hamburger");

function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

///////////////////////////////////////////////////APARECER BUSCADOR///////////////////////////////////////////
menu.addEventListener("click", toggleMenu, false);

const aparecer = document.querySelector(".buscar2");

const buscar1 = document.querySelector(".fa-search");

buscar1.addEventListener("click", function () {
  if (aparecer.style.display === "flex") {
    aparecer.style.display = "none";
  } else {
    aparecer.style.display = "flex";
  }
});

///////////////////////////////////////////////////// SCROLL UP ///////////////////////////////////////////

let boton = document.getElementById("up");

boton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
