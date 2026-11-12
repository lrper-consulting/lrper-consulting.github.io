/*
  Animaciones del sitio. Sin bibliotecas externas.

  1. Revelado al desplazarse: los elementos con data-revela aparecen al entrar
     en pantalla. En un contenedor con data-revela-hijos, sus hijos aparecen
     uno tras otro.
  2. data-al-entrar: marca un elemento como "es-visible" al entrar en pantalla,
     para que el CSS cambie su estado (por ejemplo, el llamado a contacto).
  3. Geometría técnica de la portada: una estructura de líneas que se dibuja
     al cargar y luego oscila muy lentamente.

  Todo el movimiento se define en assets/css/main.css; este archivo solo
  agrega la clase "es-visible" en el momento oportuno.
  Si el visitante pide menos movimiento en su sistema, todo aparece de
  inmediato y la geometría queda quieta.
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

  /* ---------- 3. Geometría técnica de la portada ---------- */

  var lienzo = document.querySelector("[data-geometria]");
  if (lienzo && lienzo.getContext) { geometria(lienzo); }

  function geometria(lienzo) {
    var CICLO = 28000;      // milisegundos de una oscilación completa
    var AMPLITUD = 0.30;    // radianes que gira a cada lado
    var DIBUJO = 2400;      // milisegundos que tarda en dibujarse al cargar
    var NX = 6, NY = 3, NZ = 3;

    var ctx = lienzo.getContext("2d");
    var color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#F08A38";
    var nodos = [], aristas = [];
    var i, j, k;

    function indice(a, b, c) { return (a * NY + b) * NZ + c; }

    // Nodos de una malla espacial y las barras que los unen.
    for (i = 0; i < NX; i++) { for (j = 0; j < NY; j++) { for (k = 0; k < NZ; k++) {
      nodos.push([i - (NX - 1) / 2, j - (NY - 1) / 2, k - (NZ - 1) / 2]);
    } } }
    for (i = 0; i < NX; i++) { for (j = 0; j < NY; j++) { for (k = 0; k < NZ; k++) {
      if (i + 1 < NX) { aristas.push([indice(i, j, k), indice(i + 1, j, k)]); }
      if (j + 1 < NY) { aristas.push([indice(i, j, k), indice(i, j + 1, k)]); }
      if (k + 1 < NZ) { aristas.push([indice(i, j, k), indice(i, j, k + 1)]); }
      // Diagonales alternadas, como en una estructura reticulada.
      if (i + 1 < NX && j + 1 < NY && (i + j + k) % 2 === 0) {
        aristas.push([indice(i, j, k), indice(i + 1, j + 1, k)]);
      }
    } } }
    // Las barras se dibujan de izquierda a derecha.
    aristas.sort(function (a, b) {
      return (nodos[a[0]][0] + nodos[a[1]][0]) - (nodos[b[0]][0] + nodos[b[1]][0]);
    });

    var ancho = 0, alto = 0, inicio = null, cuadro = null, enPantalla = true;

    function ajustar() {
      var caja = lienzo.getBoundingClientRect();
      var densidad = Math.min(window.devicePixelRatio || 1, 2);
      ancho = caja.width; alto = caja.height;
      lienzo.width = Math.round(ancho * densidad);
      lienzo.height = Math.round(alto * densidad);
      ctx.setTransform(densidad, 0, 0, densidad, 0, 0);
    }

    function dibujar(ahora) {
      if (inicio === null) { inicio = ahora; }
      var t = ahora - inicio;
      var avance = reducir ? 1 : Math.min(1, t / DIBUJO);
      var giro = 0.55 + (reducir ? 0 : AMPLITUD * Math.sin((t / CICLO) * 2 * Math.PI));
      var inclinacion = 0.38;
      var escala = Math.min(ancho, alto * 1.6) * 0.15;
      var cx = ancho * 0.56, cy = alto * 0.5, foco = 9;
      var cg = Math.cos(giro), sg = Math.sin(giro), ci = Math.cos(inclinacion), si = Math.sin(inclinacion);

      var puntos = nodos.map(function (n) {
        var x = n[0] * cg + n[2] * sg, z = -n[0] * sg + n[2] * cg;
        var y = n[1] * ci - z * si; z = n[1] * si + z * ci;
        var p = foco / (foco + z);
        return [cx + x * escala * p, cy + y * escala * p, z];
      });

      ctx.clearRect(0, 0, ancho, alto);
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1;

      var total = aristas.length;
      for (var e = 0; e < total; e++) {
        var parte = Math.max(0, Math.min(1, avance * total - e));
        if (parte <= 0) { break; }
        var a = puntos[aristas[e][0]], b = puntos[aristas[e][1]];
        // Las barras lejanas se ven más tenues que las cercanas.
        ctx.globalAlpha = 0.18 + 0.42 * (1 - ((a[2] + b[2]) / 2 + 2) / 4);
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(a[0] + (b[0] - a[0]) * parte, a[1] + (b[1] - a[1]) * parte);
        ctx.stroke();
      }
      if (avance >= 1) {
        ctx.globalAlpha = 0.75;
        puntos.forEach(function (p) { ctx.beginPath(); ctx.arc(p[0], p[1], 1.6, 0, 2 * Math.PI); ctx.fill(); });
      }
      ctx.globalAlpha = 1;

      cuadro = (!reducir && enPantalla && !document.hidden) ? window.requestAnimationFrame(dibujar) : null;
    }

    function reanudar() {
      if (cuadro === null) { cuadro = window.requestAnimationFrame(dibujar); }
    }

    ajustar();
    window.addEventListener("resize", function () { ajustar(); reanudar(); });
    document.addEventListener("visibilitychange", reanudar);
    // La animación se detiene cuando la portada sale de la pantalla.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        enPantalla = entradas[0].isIntersecting;
        if (enPantalla) { reanudar(); }
      }).observe(lienzo);
    }
    reanudar();
  }
})();
