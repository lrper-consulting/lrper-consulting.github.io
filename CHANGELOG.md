# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). El sitio usa [Semantic Versioning](https://semver.org/lang/es/), según las reglas de `CONTRIBUTING.md`.

## [0.12.1] - 2026-11-12

### Cambiado

- Rendimiento de las animaciones, a partir de una grabación de rendimiento de la portada:
  - Los elementos que aparecen al desplazarse nacen ocultos desde el CSS. Antes, al terminar la carga, el script ocultaba con una animación unos 30 elementos que ya se veían.
  - El revelado se activa poco antes de que el elemento entre en pantalla.
  - El llamado a contacto se oscurece con una capa que se desvanece, en vez de animar el color de fondo.
  - La sombra de los botones aparece por opacidad; la de las tarjetas de servicio cambia sin transición.
  - Sin transición de color en las letras de los compromisos (ahora por opacidad), el número de las tarjetas de servicio, el texto de los retratos y los puntos de la línea FEL. Las cartas del equipo ya no transicionan su sombra (nunca cambiaba).
- Tipografías alojadas en el sitio (`assets/fonts/`, licencia SIL OFL) y precargadas, en vez de Google Fonts. Se configuran con `fuentes_locales` en `_data/marca.yml`.

### Eliminado

- Geometría técnica animada de la portada (lienzo rotatorio bajo el nombre), para aligerar la carga.
- Entrada escalonada de las tarjetas de etapas FEL en Servicios; se mantiene solo la línea de tiempo con sus puntos.

## [0.12.0] - 2026-11-12

### Agregado

- Animaciones (`assets/js/animaciones.js`, sin bibliotecas externas): geometría técnica en la portada, revelado de secciones al desplazarse, línea que une los compromisos y los valores, línea de tiempo de las etapas FEL y transición del llamado a contacto.
- Microinteracciones al pasar el cursor en tarjetas de servicio, retratos del equipo, enlaces y botones.
- Los retratos del inicio enlazan al perfil de cada integrante en la página Nosotros.
- Todo el movimiento se desactiva para quien pide menos movimiento en su sistema.

### Cambiado

- Misión, visión y valores reescritos; título de la sección de valores.
- El llamado a contacto termina en panel oscuro.

## [0.11.0] - 2026-11-12

### Agregado

- Misión, visión y los cuatro valores (calidad, evidencia, integridad y sostenibilidad) en la página Nosotros, en español e inglés.

### Cambiado

- Lema de la marca: "Ingeniería temprana para decidir con fundamento".
- Ícono de la portada más grande y sin fondo.

## [0.10.0] - 2026-11-11

### Agregado

- Ícono de la marca: versión clara junto a la sigla en el encabezado y el pie, y versión a color sobre el nombre en la portada.
- Ícono de la pestaña del navegador (favicon) en SVG, PNG e ICO.

### Cambiado

- Títulos de las cabeceras de página centrados respecto a su texto; introducción de Servicios en dos párrafos.

## [0.9.0] - 2026-11-11

### Agregado

- Correo de contacto en la página Contacto y en el pie de página. El enlace agrega en copia (CC) a las direcciones de `correo_copia` de `_data/marca.yml`, sin mostrarlas.

### Cambiado

- Antetítulos de sección más grandes y texto lateral de las cabeceras alineado a la derecha.
- Título del bloque de servicios del inicio.

## [0.8.0] - 2026-11-11

### Cambiado

- Portada: la imagen pasa al fondo con un velo del color primario; el nombre de la empresa flota a la izquierda en una sola línea, con "Engineering Resources" en mayúsculas y menor tamaño; el texto y los botones van en una caja opaca a la derecha.
- Mazo del equipo: el panel del perfil tiene alto fijo, con desplazamiento interno para el perfil y las especialidades, y la carta se elige con clic.

### Agregado

- Imagen de portada: vista aérea de un parque solar (`assets/img/portada-parque-solar.jpg`, 1920 × 960 px).

## [0.7.0] - 2026-11-11

### Agregado

- Perfiles de los cinco integrantes del equipo en `_data/equipo.yml`, en español e inglés.

## [0.6.0] - 2026-11-11

### Agregado

- Diseño de la página Servicios: etapas FEL en tarjetas (`_data/etapas.yml`) y servicios en filas con sus entregables.
- Página Proyectos con aviso de sección en preparación mientras no haya proyectos publicados.
- Diseño de la página Contacto, con formulario opcional que se activa con `formulario_url` en `_data/marca.yml`.
- Cabecera común para las páginas interiores (`_includes/cabecera-pagina.html`).
- Dominio propio `lrper.com` (archivo `CNAME`).

### Eliminado

- Bloque "Cómo trabajamos" y su archivo `_data/metodologia.yml`.
- La ficha provisional del proyecto queda sin publicar (`published: false`), como plantilla.

## [0.5.0] - 2026-11-10

### Agregado

- Diseño de la página Nosotros: cabecera oscura, paneles de misión y visión, valores numerados.
- Equipo como mazo de cartas interactivo (`_includes/mazo-equipo.html` y `assets/js/mazo.js`), con lista de perfiles como alternativa sin JavaScript.

### Cambiado

- Dirección del sitio actualizada tras el cambio de nombre de la organización.
- El título del bloque de equipo pasa a `_data/i18n.yml` para compartirlo entre Inicio y Nosotros.

## [0.4.0] - 2026-11-10

### Agregado

- Diseño de la página de inicio: portada con el nombre de la empresa e imagen de cubierta, tarjetas de servicio numeradas con ícono, proyecto destacado en banda oscura, compromisos y retratos del equipo.
- Bloque "Tecnologías" en el inicio, con datos en `_data/tecnologias.yml`.
- Logo de texto "LRP | ER" en encabezado y pie de página.
- Botón de contorno para fondos oscuros e íconos de línea (`_includes/icono.html`).

### Cambiado

- Nombre de la empresa: LRPER (Leading Renewable Projects | Engineering Resources).
- Encabezado oscuro y pie de página en tres columnas.
- Llamado a contacto en panel con título y texto.

## [0.3.0] - 2026-11-10

### Agregado

- Identidad visual "Industrial / Transición energética": paleta de marca, colores de apoyo y funcionales, medidas, sombras y transiciones, definidos en `_data/marca.yml`.
- Tipografías Space Grotesk (títulos), Inter (texto) e IBM Plex Mono (etiquetas técnicas).
- Variantes de botón: primario, secundario y de acento.

### Cambiado

- Las variables CSS se generan automáticamente desde `_data/marca.yml` y adoptan los nombres de la especificación de marca.
- Pie de página oscuro y llamado a contacto sobre fondo verde claro.

## [0.2.0] - 2026-11-10

### Agregado

- Estructura bilingüe: páginas en español (`es/`) e inglés (`en/`) con selector de idioma.
- Páginas Inicio, Nosotros, Servicios, Proyectos y Contacto, cada una con su plantilla.
- Colección de proyectos con ficha de proyecto y una ficha provisional.
- Datos en `_data/`: marca, menú, textos de interfaz, equipo, servicios, metodología y nosotros.
- Variables de marca: colores y fuentes definidos en `_data/marca.yml`.
- Encabezado, pie de página y tarjetas como fragmentos reutilizables.
- Estilos base adaptables a móvil.
- Página de error 404 y redirección de la dirección raíz.
- `README.md`, `CONTRIBUTING.md`, `ROADMAP.md` y archivos de consistencia (`.gitattributes`, `.editorconfig`, configuración de VS Code).

## [0.1.0] - 2026-11-10

### Agregado

- Sitio mínimo en Jekyll: configuración, plantilla base y página de inicio.
