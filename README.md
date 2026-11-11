# Sitio web de LRPER

Leading Renewable Projects | Engineering Resources

Sitio estático de la empresa, en español e inglés, construido con Jekyll y publicado con GitHub Pages.

- **Sitio publicado:** https://lrper-consulting.github.io
- **Cómo editar:** leer `CONTRIBUTING.md` antes del primer cambio.
- **Plan de trabajo:** `ROADMAP.md`.
- **Historial de versiones:** `CHANGELOG.md`.

## Cómo funciona

GitHub Pages ejecuta Jekyll automáticamente: al subir un cambio a la rama `main`, el sitio se regenera y se publica en cerca de un minuto. No hay que instalar nada para editar contenido.

El sitio separa tres capas:

| Capa | Dónde vive | Qué contiene |
|---|---|---|
| Contenido | `es/`, `en/`, `_data/`, `_proyectos/`, `assets/img/` | Textos, equipo, servicios, proyectos, imágenes |
| Marca | `_data/marca.yml`, `_config.yml` | Colores, tipografías, logo, lema, nombre |
| Estructura | `_layouts/`, `_includes/`, `assets/css/` | Plantillas y estilos |

## Estructura de carpetas

```
├── _config.yml          Nombre de la empresa (title y nombre), dirección, versión
├── _data/
│   ├── marca.yml        Colores, fuentes, logo, lema, contacto
│   ├── menu.yml         Enlaces del menú
│   ├── i18n.yml         Textos fijos de la interfaz en ambos idiomas
│   ├── equipo.yml       Integrantes
│   ├── servicios.yml    Líneas de servicio y entregables
│   ├── tecnologias.yml  Tecnologías del bloque de inicio
│   ├── metodologia.yml  Pasos de "Cómo trabajamos"
│   └── nosotros.yml     Misión, visión, valores, enfoque
├── _proyectos/
│   ├── es/              Una ficha por proyecto, en español
│   └── en/              La misma ficha, en inglés
├── es/                  Páginas en español
├── en/                  Páginas en inglés
├── _layouts/            Una plantilla por tipo de página
├── _includes/           Fragmentos reutilizables (encabezado, pie, tarjetas)
├── assets/
│   ├── css/main.css     Estilos (solo medidas; los colores vienen de marca.yml)
│   ├── js/mazo.js       Mazo de cartas del equipo (página Nosotros)
│   └── img/             Imágenes
├── docs/                Documentación interna del sitio
├── index.html           Redirige la dirección raíz al idioma por defecto
└── 404.html             Página de error
```

## Páginas

| Página | Español | Inglés | Plantilla |
|---|---|---|---|
| Inicio | `es/index.md` | `en/index.md` | `inicio` |
| Nosotros | `es/nosotros.md` | `en/about.md` | `nosotros` |
| Servicios | `es/servicios.md` | `en/services.md` | `servicios` |
| Proyectos | `es/proyectos.md` | `en/projects.md` | `proyectos` |
| Ficha de proyecto | `_proyectos/es/*.md` | `_proyectos/en/*.md` | `proyecto` |
| Contacto | `es/contacto.md` | `en/contact.md` | `contacto` |

## Vista previa local (opcional)

Requiere Ruby. Con Ruby instalado:

```
gem install jekyll -v 3.10.0
jekyll serve
```

El sitio queda disponible en `http://localhost:4000`. Sin Ruby, los cambios se revisan en una rama o directamente en el sitio publicado.

## Confidencialidad

Este repositorio es público. No se suben datos de clientes, documentos internos ni datos personales sin autorización de su titular.
