/*
  Animaciones del sitio. Sin bibliotecas externas.

  1. Revelado al desplazarse: los elementos con data-revela aparecen al entrar
     en pantalla. En un contenedor con data-revela-hijos, sus hijos aparecen
     uno tras otro.
  2. data-al-entrar: marca un elemento como "es-visible" al entrar en pantalla,
     para que el CSS cambie su estado (por ejemplo, el llamado a contacto).

  Todo el movimiento se define en assets/css/main.css; este archivo solo
  agrega la clase "es-visible" en el momento oportuno.
  Si el visitante pide menos movimiento en su sistema, todo aparece de
  inmediato.
*/
(function () {
  "use strict";

  var reducir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1 y 2. Revelado al desplazarse ---------- */

  // Los hijos de un grupo se revelan en secuencia: cada uno recibe su posición.
  document.querySelectorAll("[data-revela-hijos]").forEach(function (grupo) {
    Array.prototype.forEach.call(grupo.children, function (hijo, i) {
      hijo.setAttribute("data-revela", "");
      hijo.style.setProperty("--i", i);
    });
  });

  var objetivos = Array.prototype.slice.call(
    document.querySelectorAll("[data-revela], [data-revela-hijos], [data-al-entrar]")
  );

  function mostrar(el) {
    el.classList.add("es-visible");
    // Terminada la entrada, el elemento vuelve a sus estilos normales
    // (así sus efectos al pasar el cursor no heredan el retraso).
    if (el.hasAttribute("data-revela")) {
      window.setTimeout(function () {
        el.removeAttribute("data-revela");
        el.style.removeProperty("--i");
      }, 1800);
    }
  }

  if (reducir || !("IntersectionObserver" in window)) {
    objetivos.forEach(mostrar);
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          mostrar(entrada.target);
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    objetivos.forEach(function (el) { observador.observe(el); });
  }
})();
