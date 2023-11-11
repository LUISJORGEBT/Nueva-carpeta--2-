const playVideo = document.getElementById("play");
const pauseVideo = document.getElementById("pause");
const videoMuestra = document.getElementById("video");
let tiempoV = document.getElementById('tiempoVm');


function playV() {
    video.play();
};
function pauseV() {
    video.pause();
};

/* caja de juego */
/* elemento que arrastra */

/* ---------------- imagen 1 ----------------------*/
const imagenUno = document.getElementById("imagen1");

imagenUno.addEventListener( "dragstart", (evento) => {
    console.log("elemento drag start activado");
});

imagenUno.addEventListener( "dragend", (evento) => {
    console.log("elemento drag end activado");
});

imagenUno.addEventListener( "drag", (evento) => {
    console.log("elemento drag activado");
});

/* ----------- imagen 2  ------------------*/
const imagenDos = document.getElementById("imagen2");

imagenDos.addEventListener( "dragstart", (evento) => {
    console.log("elemento drag start activado");
});

imagenDos.addEventListener( "dragend", (evento) => {
    console.log("elemento drag end activado");
});

imagenDos.addEventListener( "drag", (evento) => {
    console.log("elemento drag activado");
});
/* -------------- imagen 3 -----------*/
const imagenTres = document.getElementById("imagen3");

imagenTres.addEventListener( "dragstart", (evento) => {
    console.log("elemento drag start activado");
});

imagenTres.addEventListener( "dragend", (evento) => {
    console.log("elemento drag end activado");
});

imagenTres.addEventListener( "drag", (evento) => {
    console.log("elemento drag activado");
});

/* ------------------------------ */

/* zona final del elemento */
/* -------------- contenedor 1 ----------- */

const finalUno =document.getElementById("final1");

finalUno.addEventListener("dragenter", (evento) => {
    console.log("evento dragenter activado");
});
finalUno.addEventListener("dragleave", (evento) => {
    console.log("evento dragleave activado");
});
finalUno.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    console.log("evento dragover activado");
});
finalUno.addEventListener("drop", (evento) => {
    finalUno.appendChild(imagenDos);
    finalUno.removeChild(parrafo1);
    finalUno.style.margin = 0;
    console.log("evento dragenter activado");
});

/* ------------------- contenedor 2 -------------- */

const finalDos =document.getElementById("final2");

finalDos.addEventListener("dragenter", (evento) => {
    console.log("evento dragenter activado");
});
finalDos.addEventListener("dragleave", (evento) => {
    console.log("evento dragleave activado");
});
finalDos.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    console.log("evento dragover activado");
});
finalDos.addEventListener("drop", (evento) => {
    finalDos.appendChild(imagenUno);
    finalDos.removeChild(parrafo2F);
    finalDos.style.margin = 0;
    finalDos.style.padding = 0;
    
    console.log("evento dragenter activado");
});

/* ---------------- contenedor 3 ----------------- */

const finalTres =document.getElementById("final3");

finalTres.addEventListener("dragenter", (evento) => {
    console.log("evento dragenter activado");
});
finalTres.addEventListener("dragleave", (evento) => {
    console.log("evento dragleave activado");
});
finalTres.addEventListener("dragover", (evento) => {
    evento.preventDefault();
    console.log("evento dragover activado");
});
finalTres.addEventListener("drop", (evento) => {
    finalTres.appendChild(imagenTres);
    finalTres.removeChild(parrafo3F);
    finalTres.style.margin = 0;
    console.log("evento dragenter activado");
});
/* ---- parrafos ------- */
const parrafo1 = document.getElementById("parrafo1F");
const parrafo2 = document.getElementById("parrafo2F");
const parrafo3 = document.getElementById("parrafo3F");
/* ------ boton reinicio  ------ */

const reinicioImg = document.getElementById("reset");
const inicioFoto = document.querySelector(".inicioFoto");

function resetPuzzle() {
    finalUno.appendChild(parrafo1);
    finalDos.appendChild(parrafo2);
    finalTres.appendChild(parrafo3);
    console.log("reset parrafo");
    finalUno.removeChild(imagenDos);
    finalDos.removeChild(imagenUno);
    finalTres.removeChild(imagenTres);
    inicioFoto.appendChild(imagenUno);
    inicioFoto.appendChild(imagenDos);
    inicioFoto.appendChild(imagenTres);
    
};

reinicioImg.addEventListener("click",resetPuzzle);