# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). El sitio usa [Semantic Versioning](https://semver.org/lang/es/), según las reglas de `CONTRIBUTING.md`.

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
