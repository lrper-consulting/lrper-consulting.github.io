# Guía de contribución del sitio web

| | |
|---|---|
| **Documento** | Guía de contribución (`CONTRIBUTING.md`) |
| **Versión de la guía** | 1.1.0 |
| **Fecha** | 2026-11-10 |
| **Aplica a** | Toda persona o asistente de IA que modifique este repositorio |

## 1. Propósito

Esta guía fija las reglas para modificar el sitio web de la empresa, de modo que cinco personas (y sus asistentes de IA) trabajen con la misma lógica y que cada cambio quede identificado, revisado y trazable.

Antes de hacer cualquier cambio, lee las secciones 2 a 6. Si usas un asistente de IA, entrégale este archivo completo junto con tu solicitud.

## 2. Principio base: tres capas separadas

| Capa | Qué contiene | Dónde vive | Quién la modifica |
|---|---|---|---|
| Contenido | Textos, proyectos, equipo, imágenes | Páginas en `es/` y `en/`, `_data/` (salvo `marca.yml`), `_proyectos/`, `assets/img/` | Todo el equipo |
| Marca | Colores, tipografías, logo, nombre | `_data/marca.yml`, `_config.yml` | Solo con acuerdo del equipo |
| Estructura | Plantillas, estilos, scripts | `_layouts/`, `_includes/`, `assets/css/`, `assets/js/` | Solo quien mantiene el sitio |

Regla: un cambio de contenido nunca debe requerir tocar la capa de marca ni la de estructura. Si lo requiere, se trata como un cambio de estructura (ver sección 5).

## 3. Dónde se hace cada cambio

| Quiero… | Archivo |
|---|---|
| Corregir mi nombre, enfoque, perfil o foto | `_data/equipo.yml` |
| Agregar un integrante | `_data/equipo.yml` (un bloque nuevo) |
| Editar un servicio o sus entregables | `_data/servicios.yml` |
| Editar misión, visión o valores | `_data/nosotros.yml` |
| Editar el texto de "Quiénes somos" | `es/nosotros.md` y `en/about.md` |
| Editar la portada del inicio | `es/index.md` y `en/index.md` |
| Agregar un proyecto | Archivo nuevo en `_proyectos/es/` y en `_proyectos/en/` |
| Cambiar el menú | `_data/menu.yml` |
| Cambiar un botón o título de bloque | `_data/i18n.yml` |
| Cambiar colores, logo o lema | `_data/marca.yml` |
| Agregar o editar una tecnología del inicio | `_data/tecnologias.yml` |
| Editar los títulos de las secciones del inicio | `es/index.md` y `en/index.md` (campo `secciones`) |
| Cambiar el nombre de la empresa | `_config.yml` (campos `title` y `nombre`) |

## 4. Reglas de contenido

**Nombres de archivo**
- Minúsculas, sin espacios, tildes ni ñ; palabras separadas por guiones: `bess-ciclo-combinado.md`.
- Imágenes con nombre descriptivo: `equipo-nombre-apellido.jpg`, no `IMG_4032.jpg`.
- No incluir versiones ni fechas en el nombre (`-v2`, `-final`): la versión la lleva Git.

**Idiomas**
- El sitio existe en español e inglés. Todo cambio de contenido se hace en ambos idiomas dentro del mismo pull request.
- En los archivos de `_data/`, cada texto tiene una versión bajo `es:` y otra bajo `en:`.
- Las páginas equivalentes comparten el mismo valor en el campo `ref` de su encabezado; así funciona el selector de idioma.
- Para un proyecto nuevo: copiar un archivo existente de `_proyectos/es/` y su par de `_proyectos/en/`, y cambiar `ref`, `permalink` y los textos.

**Texto**
- Un solo título principal (`#`) por página; los subtítulos bajan en orden (`##`, luego `###`), sin saltarse niveles.
- Unidades del Sistema Internacional, con espacio entre número y unidad: `50 MW`, `200 MWh`.
- Fechas en los datos en formato ISO 8601 (`2026-11-10`); en texto corrido, formato largo ("10 de noviembre de 2026").
- Siglas definidas la primera vez que aparecen en cada página: "sistema de almacenamiento de energía en baterías (BESS)".

**Imágenes**
- Toda imagen lleva texto alternativo que la describa.
- Peso máximo recomendado: 300 kB por imagen. Formatos: `.jpg` o `.webp` para fotos, `.svg` para logos y diagramas.

**Datos (`_data/*.yml`)**
- Respetar la sangría y los nombres de campo existentes; copiar un bloque ya existente como modelo.
- No agregar campos nuevos sin acordarlo: las plantillas no los mostrarán.

**Confidencialidad**
- El repositorio es público. No se suben datos de clientes, cifras contractuales, documentos internos ni datos personales más allá de los que cada integrante autorice para su perfil.

## 5. Versionado del sitio

El sitio usa Semantic Versioning (`MAYOR.MENOR.CORRECCIÓN`). La versión vigente se registra en `_config.yml` (campo `version`) y cada versión se describe en `CHANGELOG.md`.

| Nivel | Cuándo sube | Ejemplos | 1.0.0 pasa a |
|---|---|---|---|
| **CORRECCIÓN** | Se corrige algo que ya existía, sin agregar contenido | Error de ortografía, nombre mal escrito, enlace roto, foto reemplazada, dato desactualizado | 1.0.1 |
| **MENOR** | Se agrega contenido o funcionalidad sin alterar lo existente | Nuevo proyecto, nuevo integrante, nueva página, nueva sección | 1.1.0 |
| **MAYOR** | Cambia la estructura, la marca o las direcciones (URL) de las páginas | Rediseño, cambio de nombre o logo de la empresa, adaptación a la marca de una matriz, eliminación o renombre de páginas | 2.0.0 |

Reglas complementarias:
- Al subir un nivel, los niveles a su derecha vuelven a cero (1.4.2 → 2.0.0).
- Mientras el sitio no se haya lanzado públicamente se usa `0.x.y`; el lanzamiento es la versión `1.0.0`.
- Si un cambio combina varios niveles, manda el más alto.
- En caso de duda entre dos niveles, pregúntate: ¿un visitante encuentra algo nuevo? (MENOR) ¿o solo algo corregido? (CORRECCIÓN).

## 6. Flujo de trabajo

1. **Rama.** Crear una rama desde `main` con el formato `tipo/descripcion-corta`: `fix/nombre-integrante`, `feat/proyecto-bess`.
2. **Commit.** Mensaje según Conventional Commits: `tipo: descripción en español, en presente y minúscula`.
3. **Versión.** Actualizar `version` en `_config.yml` y agregar la entrada en `CHANGELOG.md`.
4. **Pull request.** Describir qué cambia y por qué. Requiere la aprobación de al menos otro integrante.
5. **Fusión.** Al fusionar en `main`, el sitio se publica automáticamente.

Tipos de commit y su efecto en la versión:

| Tipo | Uso | Efecto |
|---|---|---|
| `fix:` | Corrección de contenido o de un error | CORRECCIÓN |
| `feat:` | Contenido o funcionalidad nuevos | MENOR |
| `feat!:` | Cambio de estructura, marca o URL | MAYOR |
| `docs:` | Cambios en `README`, esta guía o el `CHANGELOG` | Ninguno |
| `style:` | Formato sin cambio de contenido (espacios, sangría) | Ninguno |
| `chore:` | Mantenimiento interno | Ninguno |

Ejemplos:
```
fix: corrige apellido en perfil del equipo
feat: agrega proyecto de autoabastecimiento con bess
feat!: adapta marca e identidad a la empresa matriz
```

## 7. Instrucciones para asistentes de IA

Si eres un asistente de IA modificando este repositorio:

1. Haz el cambio mínimo que cumpla la solicitud. No reformatees, reordenes ni "mejores" contenido que no se te pidió tocar.
2. Modifica solo la capa de contenido. No edites `_layouts/`, `_includes/`, `assets/css/` ni `assets/js/` salvo que la solicitud lo pida explícitamente.
3. No inventes datos: cargos, títulos, cifras, clientes o resultados deben venir de la persona que hace la solicitud. Si falta un dato, pregúntalo.
4. Respeta las reglas de la sección 4 (nombres de archivo, idiomas, estructura de títulos, formato de los datos). Todo cambio de contenido va en español y en inglés.
5. Al terminar, indica: los archivos modificados, el tipo de commit, el mensaje de commit propuesto y la nueva versión según la sección 5, con la entrada correspondiente para `CHANGELOG.md`.
6. Si la solicitud implica un cambio MAYOR o toca la capa de marca, adviértelo antes de ejecutarlo.

## 8. Lista de verificación antes del pull request

- [ ] El cambio está en el archivo correcto según la sección 3.
- [ ] Los nombres de archivo cumplen la sección 4.
- [ ] El cambio está hecho en español y en inglés.
- [ ] No hay información confidencial ni datos personales no autorizados.
- [ ] `version` y `CHANGELOG.md` están actualizados (si corresponde).
- [ ] El mensaje de commit usa un tipo de la sección 6.
- [ ] Revisé cómo se ve el cambio en la vista previa.

## 9. Cambios a esta guía

Esta guía se modifica por pull request con tipo `docs:` y aprobación de al menos dos integrantes. Su propia versión (en el encabezado) sigue la misma lógica de la sección 5.
