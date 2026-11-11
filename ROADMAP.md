# Hoja de ruta del sitio web

| | |
|---|---|
| **Documento** | Hoja de ruta (`ROADMAP.md`) |
| **Versión** | 1.1.0 |
| **Fecha** | 2026-11-10 |
| **Estado actual** | Fases 1 y 2 completadas; fase 3 por iniciar |

## Criterio de diseño de esta hoja de ruta

El orden de las fases va de lo que menos cambia a lo que más cambia:

1. **Estructura** (árbol de páginas): estable aunque cambien el nombre, la marca o el diseño.
2. **Diseño**: provisional, concentrado en variables para poder reemplazarlo.
3. **Contenido y detalle**: se ajusta de forma continua.

Ninguna decisión pendiente (nombre, dominio, logo, afiliación) bloquea el avance hasta la fase 6.

## Decisiones pendientes

| Decisión | Estado | Fase que la necesita | Cómo se aísla mientras tanto |
|---|---|---|---|
| Nombre definitivo de la empresa | Pendiente | 6 | Un solo campo en `_config.yml` |
| Dominio | En cotización | 6 | El sitio usa rutas relativas (`relative_url`) |
| Logo, colores y tipografía | Pendiente | 3 (provisional), 6 (definitivo) | Variables de marca en un solo archivo |
| Idiomas | Resuelto: español e inglés | 1 | Carpetas `es/` y `en/` con plantillas comunes |
| Afiliación con empresa matriz | Pendiente | 7 | Separación contenido / marca / estructura |

## Fase 0 — Preparación ✅

- [x] Organización y repositorio en GitHub
- [x] Entorno de trabajo (VS Code, Git, GitHub Desktop)
- [x] Guía de contribución (`CONTRIBUTING.md`)
- [x] Sitio mínimo en Jekyll publicado

## Fase 1 — Árbol del sitio ✅

**Objetivo:** definir qué páginas existen, cómo se llaman y qué contiene cada una.

- [x] Revisar 5 a 8 sitios de consultoras de ingeniería y energía como referencia: qué secciones tienen, en qué orden, qué muestran en el inicio
- [x] Decidir idiomas del sitio
- [x] Acordar el árbol de páginas y el menú
- [x] Definir para cada página su propósito y sus bloques de contenido (sin redactar aún)
- [x] Fijar los nombres de archivo y direcciones (URL) de cada página

**Resultado:** árbol plano de cinco páginas por idioma (Inicio, Nosotros, Servicios, Proyectos, Contacto) más una ficha por proyecto, en español e inglés. Detalle en `docs/mapa-del-sitio.md`.

**Entregable:** mapa del sitio documentado en el repositorio.
**Criterio de cierre:** los cinco integrantes aprueban el árbol.

## Fase 2 — Esqueleto modular ✅

**Objetivo:** un sitio navegable completo, con contenido de relleno y sin diseño.

- [x] Crear todas las páginas del árbol con texto provisional
- [x] Menú y pie de página como fragmentos reutilizables (`_includes/`), generados desde `_data/menu.yml`
- [x] Datos del equipo en `_data/equipo.yml`
- [x] Proyectos como colección (`_proyectos/`), con plantilla de ficha
- [x] Variables de marca en un solo archivo: color primario, secundario y terciario, tipografías, espaciados; con valores neutros provisionales
- [x] Archivos de consistencia: `.gitattributes`, `.editorconfig`, configuración compartida de VS Code
- [x] `README.md` y `CHANGELOG.md`

**Entregable:** sitio navegable de principio a fin.
**Criterio de cierre:** agregar un integrante o un proyecto no requiere tocar ninguna plantilla.

## Fase 3 — Diseño central

**Objetivo:** una identidad visual provisional, coherente y reemplazable.

- [ ] Elegir una dirección visual a partir de 2 o 3 propuestas
- [ ] Paleta y tipografías provisionales, cargadas en las variables de marca
- [ ] Componentes base: portada, tarjetas, secciones, botones, pie de página
- [ ] Adaptación a móvil y tableta
- [ ] Prueba de reemplazo: cambiar los colores debe requerir editar solo el archivo de marca

**Entregable:** sitio con diseño aplicado.
**Criterio de cierre:** la prueba de reemplazo funciona; un diseñador puede intervenir sin tocar el contenido.

## Fase 4 — Contenido

**Objetivo:** reemplazar el texto provisional por el definitivo.

- [ ] Quiénes somos, misión, visión y valores
- [ ] Descripción de servicios (FEL 1 y FEL 2)
- [ ] Ficha del primer proyecto (autoabastecimiento con BESS)
- [ ] Perfiles y fotos del equipo, con autorización de cada integrante
- [ ] Imágenes y diagramas
- [ ] Revisión de confidencialidad: nada sensible en el repositorio público

**Entregable:** sitio con contenido real.
**Criterio de cierre:** cada página fue revisada por alguien distinto de quien la redactó.

## Fase 5 — Detalle y calidad

**Objetivo:** el nivel de terminación de un sitio profesional.

- [ ] Animaciones y transiciones
- [ ] Formulario de contacto (servicio externo)
- [ ] Posicionamiento: títulos, descripciones, mapa del sitio, imagen para redes sociales, ícono de pestaña
- [ ] Accesibilidad: contraste, texto alternativo, navegación por teclado
- [ ] Rendimiento: peso de imágenes y tiempos de carga
- [ ] Página de error 404
- [ ] Pruebas en distintos navegadores y dispositivos

**Entregable:** sitio listo para publicarse.
**Criterio de cierre:** lista de verificación de calidad completa.

## Fase 6 — Lanzamiento

**Objetivo:** pasar del repositorio de práctica al sitio oficial.

- [ ] Nombre definitivo, logo y colores cargados en configuración y marca
- [ ] Renombrar o transferir el repositorio (conserva el historial)
- [ ] Dominio propio conectado y verificado
- [ ] Correo de empresa como contacto de la organización
- [ ] Rama `main` protegida: todo cambio por pull request aprobado
- [ ] Publicación de la versión `1.0.0`

**Entregable:** sitio oficial en dominio propio.

## Fase 7 — Evolución

**Objetivo:** mantener el sitio y resolver la ruta de afiliación.

- [ ] Ruta A, independiente: mantenimiento y nuevas secciones según necesidad
- [ ] Ruta B, afiliación: adaptar marca, dirección o migrar contenido al sitio de la matriz (versión `2.0.0`)
- [ ] Evaluar portal de clientes como sistema separado, si se requiere

## Versiones previstas

| Versión | Hito |
|---|---|
| 0.1.0 | Sitio mínimo (fase 0) |
| 0.2.0 | Esqueleto navegable (fase 2) |
| 0.3.0 | Diseño central aplicado (fase 3) |
| 0.4.0 | Contenido real (fase 4) |
| 0.5.0 | Calidad completa (fase 5) |
| 1.0.0 | Lanzamiento oficial (fase 6) |
| 2.0.0 | Adaptación a empresa matriz, si ocurre (fase 7) |
