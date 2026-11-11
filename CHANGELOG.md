# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). El sitio usa [Semantic Versioning](https://semver.org/lang/es/), según las reglas de `CONTRIBUTING.md`.

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
