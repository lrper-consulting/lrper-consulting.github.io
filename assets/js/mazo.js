/*
  Mazo de cartas del equipo (página Nosotros).

  Las cartas se abren en abanico. Al hacer clic en una carta (o pulsar Enter
  o Espacio con el teclado), esta sube al frente y su perfil se muestra en el
  panel, que tiene alto fijo y desplazamiento interno.
  Funciona con cualquier número de integrantes.

  Sin JavaScript este archivo no se ejecuta y la página muestra todos los
  perfiles en lista (ver .mazo en assets/css/main.css).
*/
(function () {
  "use strict";

  var GIRO_POR_CARTA = 4;    // grados de inclinación entre cartas vecinas
  var CAIDA_POR_CARTA = 10;  // píxeles que baja cada carta al alejarse del centro

  document.querySelectorAll("[data-mazo]").forEach(function (mazo) {
    var cartas = Array.prototype.slice.call(mazo.querySelectorAll("[data-carta]"));
    var perfiles = Array.prototype.slice.call(mazo.querySelectorAll("[data-perfil]"));
    if (cartas.length === 0) { return; }

    var centro = (cartas.length - 1) / 2;

    // Posición de cada carta en el abanico, según su distancia al centro.
    cartas.forEach(function (carta, i) {
      carta.style.setProperty("--giro", (i - centro) * GIRO_POR_CARTA + "deg");
      carta.style.setProperty("--caida", Math.abs(i - centro) * CAIDA_POR_CARTA + "px");
    });

    function elegir(activa) {
      cartas.forEach(function (carta, i) {
        var esActiva = i === activa;
        carta.setAttribute("aria-pressed", esActiva ? "true" : "false");
        // Las cartas más cercanas a la activa quedan por encima de las lejanas.
        carta.style.zIndex = esActiva ? cartas.length + 1 : cartas.length - Math.abs(i - activa);
      });
      perfiles.forEach(function (perfil, i) {
        perfil.hidden = i !== activa;
        // Cada perfil se muestra desde el inicio de su texto.
        var cuerpo = perfil.querySelector(".perfil__cuerpo");
        if (cuerpo) { cuerpo.scrollTop = 0; }
      });
    }

    // La carta se elige con clic (o con Enter / Espacio desde el teclado).
    cartas.forEach(function (carta, i) {
      carta.addEventListener("click", function () { elegir(i); });
    });

    mazo.classList.add("mazo--activo");

    // Si se llega desde el inicio con ?integrante=<id>, se abre esa carta.
    var inicial = Math.floor(centro);
    var pedido = new URLSearchParams(window.location.search).get("integrante");
    if (pedido) {
      cartas.forEach(function (carta, i) {
        if (carta.getAttribute("aria-controls") === "perfil-" + pedido) { inicial = i; }
      });
    }
    elegir(inicial);
  });
})();
