/* =========================
   ELEMENTOS
========================= */

const boton = document.getElementById("comenzar");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");


/* =========================
   INICIAR EXPERIENCIA
========================= */

boton.addEventListener("click", function () {

    inicio.classList.add("oculto");
    contenido.classList.add("visible");

    /*
       La música todavía no se reproduce aquí.
       Primero comprobaremos que GitHub Pages
       reconoce correctamente el archivo MP3.
    */

});


/* =========================
   COMPROBACIÓN DEL AUDIO
========================= */

musica.addEventListener("error", function () {

    console.log("No se pudo cargar musica.mp3");

});


musica.addEventListener("canplaythrough", function () {

    console.log("musica.mp3 cargado correctamente");

});
