/* =====================================================
   ELEMENTOS
===================================================== */

const boton = document.getElementById("comenzar");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");

const textoLetra = document.getElementById("texto-letra");
const final = document.getElementById("final");


/* =====================================================
   LETRA SINCRONIZADA
===================================================== */

/*
   Puedes cambiar estos textos posteriormente si quieres.
   Los tiempos están preparados para la canción.
*/

const letra = [
    {
        tiempo: 4,
        texto: "Vámonos de aquí"
    },
    {
        tiempo: 8,
        texto: "Acompáñame"
    },
    {
        tiempo: 14,
        texto: "Yo te cuidaré"
    },
    {
        tiempo: 25,
        texto: "Corre y no vuelvas..."
    },
    {
        tiempo: 36,
        texto: "Corre, te sigo, vámonos a cualquier lugar"
    },
    {
        tiempo: 46,
        texto: "Vámonos de viaje..."
    },
    {
        tiempo: 59,
        texto: "No importa, vamos a estar bien"
    },
    {
        tiempo: 67,
        texto: "Vamos a dejar nuestra ciudad"
    },
    {
        tiempo: 74,
        texto: "Comprarnos ropa..."
    },
    {
        tiempo: 80,
        texto: "No importa todo lo demás"
    },
    {
        tiempo: 89,
        texto: "¡Ay wey, qué felicidad!"
    }
];


/* =====================================================
   COMENZAR
===================================================== */

boton.addEventListener("click", async () => {

    inicio.classList.add("oculto");

    contenido.classList.add("visible");

    /*
       El navegador permite reproducir audio
       porque la reproducción ocurre directamente
       después de pulsar el botón.
    */

    try {

        musica.volume = 0.8;

        await musica.play();

    } catch (error) {

        console.log(
            "El navegador bloqueó la reproducción:",
            error
        );

    }

    /*
       Llevar suavemente al usuario hacia el jardín.
    */

    setTimeout(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 300);

});


/* =====================================================
   SINCRONIZAR LETRA
===================================================== */

musica.addEventListener("timeupdate", () => {

    const tiempoActual = musica.currentTime;

    let textoActual = "";

    for (let i = 0; i < letra.length; i++) {

        if (tiempoActual >= letra[i].tiempo) {
            textoActual = letra[i].texto;
        }

    }

    if (textoLetra.textContent !== textoActual) {

        textoLetra.style.opacity = "0";
        textoLetra.style.transform = "translateY(8px)";

        setTimeout(() => {

            textoLetra.textContent = textoActual;

            textoLetra.style.opacity = "1";
            textoLetra.style.transform = "translateY(0)";

        }, 150);

    }

});


/* =====================================================
   FINAL
===================================================== */

musica.addEventListener("ended", () => {

    textoLetra.textContent = "";

    final.classList.add("mostrar");

    setTimeout(() => {

        final.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

});


/* =====================================================
   SI LA CANCIÓN ES MÁS LARGA
===================================================== */

let finalMostrado = false;

musica.addEventListener("timeupdate", () => {

    /*
       Si llega aproximadamente al final previsto,
       mostramos la pantalla final.
    */

    if (
        musica.currentTime >= 89 &&
        !finalMostrado
    ) {

        finalMostrado = true;

        setTimeout(() => {

            final.classList.add("mostrar");

        }, 3500);

    }

});


/* =====================================================
   CONTROL DE ERROR DEL AUDIO
===================================================== */

musica.addEventListener("error", () => {

    console.error(
        "No se pudo cargar musica.mp3"
    );

});


/* =====================================================
   COMPROBACIÓN
===================================================== */

musica.addEventListener("canplaythrough", () => {

    console.log(
        "✓ musica.mp3 cargado correctamente"
    );

});
