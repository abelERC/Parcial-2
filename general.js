//Variables
const menu = document.querySelector('#menuMovil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnMenu');
const salir = document.querySelector('#salir');
const imagenes = document.querySelectorAll('#fotos');
const lightbox = document.querySelector('#lightbox')
const salida = document.querySelector('#salida')
const imagenLightbox = document.querySelector('#imagenGrande')
//Eventos
btnMenu.addEventListener('click', mostrarMenu);
salir.addEventListener('click', ocultarMenu);
imagenes.forEach( imagen =>{
    imagen.addEventListener('click', seleccionarImagen);
})
//Funciones
function seleccionarImagen(e){
    const img = e.target.children[0];
    console.log(img)
}

function mostrarMenu(){
    menu.style.left = '10%';
    degradado.style.display = 'flex';
}

function ocultarMenu(){
    menu.style.left = '100%';
    degradado.style.display = 'none';
}