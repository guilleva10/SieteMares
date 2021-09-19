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

/////////////////////////////////////////////////// PRIMER CAROUSEL/////////////////////////////////

let carusel = $(".owl-carousel");

let isPhone = window.matchMedia("(max-width: 900px)").matches;
carusel.owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  nav: true,
  items: isPhone ? 1 : 2,
});

function crearCarusel() {
  const media = window.matchMedia("(max-width: 900px)");
  if (media.matches && !isPhone) {
    carusel.data("owlCarousel").options.items = 1;
    isPhone = true;
  } else if (!media.matches && isPhone) {
    carusel.data("owlCarousel").options.items = 3;
    isPhone = false;
  }
}

crearCarusel();
window.addEventListener("resize", function () {
  crearCarusel();
});

$(".owl-carousel").owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  nav: true,

  items: 1,
});

//////////////////////////////////////////////// SEGUNDO CAROUSEL ///////////////////////////////////////

function crearSlider(listaDeImagenes) {
  const containerSlider = document.createElement("div");
  containerSlider.classList.add("container-slider");

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slider.style.width = listaDeImagenes.imagenes.length * 100 + "%";

  const listaDeSections = listaDeImagenes.imagenes.map(function (imagen) {
    const unaSection = document.createElement("div");
    unaSection.classList.add("slider__section");
    unaSection.classList.add("secciones-lista" + listaDeImagenes.id);

    const sliderImg = document.createElement("img");
    sliderImg.classList.add("slider__img");
    sliderImg.src = imagen;

    unaSection.appendChild(sliderImg);
    slider.appendChild(unaSection);
    return unaSection;
  });

  containerSlider.appendChild(slider);

  const flechaIzq = document.createElement("div");
  flechaIzq.textContent = "<";
  flechaIzq.classList.add("slider__btn");
  flechaIzq.classList.add("slider__btn--left");

  const flechaDer = document.createElement("div");
  flechaDer.textContent = ">";
  flechaDer.classList.add("slider__btn");
  flechaDer.classList.add("slider__btn--right");

  containerSlider.appendChild(flechaDer);
  containerSlider.appendChild(flechaIzq);

  const dream = document.querySelector(".dream");
  dream.after(containerSlider);

  const ultimaSliderSection = listaDeSections[listaDeSections.length - 1];
  slider.insertAdjacentElement("afterbegin", ultimaSliderSection);

  function Next() {
    let sliderSectionFirst = document.querySelectorAll(
      ".secciones-lista" + listaDeImagenes.id
    )[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function Prev() {
    let sliderSection = document.querySelectorAll(
      ".secciones-lista" + listaDeImagenes.id
    );
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  flechaIzq.addEventListener("click", function () {
    Prev();
  });

  flechaDer.addEventListener("click", function () {
    Next();
  });

  // setInterval(function () {
  // Next();
  // }, 3000);
}

const listaDeFotos = {
  id: 1,
  imagenes: [
    "./Imagenes/imagen6.jpeg",
    "./Imagenes/imagen8.jpeg",
    "./Imagenes/imagen9.jpeg",
  ],
};

crearSlider(listaDeFotos);

///////////////////////////////////////////////////// SCROLL UP ///////////////////////////////////////////

let boton = document.getElementById("up");

boton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

///////////////////////////////////////////////////// LISTA DE PRODUCTOS  (FALTA TERMINAR - proxima entrega)///////////////////////////////////////////////

/*


articulo

AKIRA, CHALECO, PRECIO DE LISTA 4200
LULU, BUZO, PRECIO DE LISTA 3200
BONO, PANTALON, PRECIO DE LISTA 2800
BOMBAY , CHAQUETA, PRECIO DE LISTA 4800*/

/*
const ListaDeProductos = [

    {
        id: 1,
        nombre: "Akira",
        precio: 4200,
        imagen: "C:\Users\Guillermo\Desktop\Full Stack Developer - Senpai Academy\Proyecto Final\Imagenes\imagen8.jpeg",
        TipoProduto: "Chaleco",
    }

{
        id: 2,
        nombre: "Lulu",
        precio: 3200,
        imagen: "C:\Users\Guillermo\Desktop\Full Stack Developer - Senpai Academy\Proyecto Final\Imagenes\imagen8.jpeg",
        TipoProduto: "Buzo",
    }

{
        id: 3,
        nombre: "Bono",
        precio: 2800,
        imagen: "C:\Users\Guillermo\Desktop\Full Stack Developer - Senpai Academy\Proyecto Final\Imagenes\imagen8.jpeg",
        TipoProduto: "Pantalon",
    }
{
        id: 4,
        nombre: "Bombay",
        precio: 4800,
        imagen: "C:\Users\Guillermo\Desktop\Full Stack Developer - Senpai Academy\Proyecto Final\Imagenes\imagen8.jpeg",
        TipoProduto: "Chaqueta",
    }
];

/*
function crearTarjetaPrdocuto(productoACrear) {

    const contenedorDiv = document.createElement("div");
    const imagen = document.createElement("img");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const tipoproducto = document.createElement("p");



    imagen.src = productoACrear.imagen;
    nombre.textContent = productoACrear.nombre;
    precio.textContent = productoACrear.precio;
    tipoproducto.textContent = productoACrear.TipoProducto;

    contenedorDiv.appendChild(imagen);
    contenedorDiv.appendChild(nombre);
    contenedorDiv.appendChild(precio);
    contenedorDiv.appendChild(tipoproducto);

    contenedorDiv.classList.add("tarjeta-producto");


    //const mimain = document.getElementsByTagName("main")



    ListaDeProductos.map(function(elemento)) {


    }


    


}


*/
