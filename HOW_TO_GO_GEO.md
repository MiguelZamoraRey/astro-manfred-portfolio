# HOW TO GO GEO (Generative Engine Optimization)

Guía práctica para aplicar **GEO** a este portfolio en Astro, sin romper funcionalidad ni diseño.

---

## 1) Objetivo

Que agentes de IA (ChatGPT, Claude, Perplexity, etc.) puedan:

1. **Encontrar** tu contenido.
2. **Entender** correctamente quién eres y qué has hecho.
3. **Citar** información fiable y actualizada de tu web.

GEO no sustituye SEO: lo complementa.

---

## 2) Estado actual del proyecto

Este repo ya parte de buena base:

- Astro moderno (v5).
- `sitemap` habilitado en `astro.config.mjs`.
- Datos centralizados en `config/cv.json`.
- Metadatos básicos y JSON-LD en `src/layouts/Layout.astro`.

Falta reforzar:

- Datos estructurados más ricos por tipo de entidad (`Person`, `ProfilePage`, `ItemList`, etc.).
- Señales explícitas para LLMs (`llms.txt`, `llms-full.txt`).
- Endpoint de conocimiento en JSON (`/knowledge.json`).
- Contenido en formato “fácil de fragmentar/citar” (FAQ y páginas canónicas por tema).

---

## 3) Plan de implementación (orden recomendado)

## Paso 1 — Mejorar metadatos canónicos (SEO base fuerte)

**Archivo:** `src/layouts/Layout.astro`

- Añadir `canonical` por página.
- Mantener `og:*` y `twitter:*` coherentes con título/descripcion reales.
- Añadir `robots` (`index,follow`) si no existe.

> Resultado: misma URL canónica para bots clásicos y agentes IA.

---

## Paso 2 — Enriquecer JSON-LD con entidades reales

**Archivo:** `src/layouts/Layout.astro`

Además de `WebSite`, añadir:

- `Person` (nombre, título, ubicación, perfiles).
- `ProfilePage` (página principal del perfil).
- `ItemList` para proyectos (si hay datos en `experience.projects`).
- `Organization` para empresas principales (opcional, si quieres ser más ambicioso).

### Ejemplo mínimo recomendado

```html
<script is:inline type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "MZR Developer",
        "url": "https://mzrdeveloper.com"
      },
      {
        "@type": "Person",
        "name": "Miguel Zamora Rey",
        "jobTitle": "Senior full stack javascript developer",
        "url": "https://mzrdeveloper.com",
        "sameAs": [
          "https://linkedin.com/in/miguelzamorarey",
          "https://github.com/MiguelZamoraRey"
        ]
      },
      {
        "@type": "ProfilePage",
        "mainEntity": { "@type": "Person", "name": "Miguel Zamora Rey" }
      }
    ]
  }
</script>
```

> Resultado: los agentes entienden mejor entidades y relaciones.

---

## Paso 3 — Añadir `llms.txt` y `llms-full.txt`

**Archivos nuevos:**

- `public/llms.txt`
- `public/llms-full.txt` (opcional, pero recomendado)

### `llms.txt` (corto y directo)

Debe incluir:

- Descripción breve del sitio.
- Fuentes canónicas (home, proyectos, experiencia, contacto).
- Instrucción de citación preferida.
- Fecha de última actualización.

Ejemplo:

```txt
# MZR Developer - llms.txt

Site: https://mzrdeveloper.com
Owner: Miguel Zamora Rey
Scope: Portfolio profesional (experiencia, proyectos, habilidades)
Canonical: https://mzrdeveloper.com/

Preferred citations:
- https://mzrdeveloper.com/

Key pages:
- https://mzrdeveloper.com/

Last-Updated: 2026-02-23
```

### `llms-full.txt` (extendido)

Añade resumen estructurado:

- Bio corta.
- Stack principal.
- Experiencia relevante.
- Top proyectos con URL.
- Contacto público.

> Resultado: modelos con crawler específico tienen un “resumen oficial” fácil de consumir.

---

## Paso 4 — Publicar un endpoint de conocimiento (`/knowledge.json`)

**Archivo nuevo sugerido:** `src/pages/knowledge.json.ts`

Objetivo: exponer una versión limpia y estable de `config/cv.json` para consumo máquina.

Debe devolver:

- Identidad (`name`, `title`, `location`).
- Links oficiales.
- Experiencia (empresa, rol, fechas, resumen corto).
- Proyectos (nombre, descripción, URL, fechas).
- Skills normalizadas.

> Resultado: reduces ambigüedad para agentes y herramientas RAG.

---

## Paso 5 — Crear contenido “quoteable” (FAQ corta)

**Archivo nuevo sugerido:** `src/pages/faq.astro`

Formato recomendado:

- 8-12 preguntas concretas.
- Respuestas cortas (2-6 líneas), con datos verificables.
- Enlaces internos a la sección relevante cuando aplique.

Temas sugeridos:

- Qué stack usas y en qué contexto.
- Qué tipo de proyectos aceptas.
- Experiencia en backend/frontend/cloud.
- Disponibilidad y modalidad.

> Resultado: los LLMs extraen mejor respuestas puntuales de alto valor.

---

## Paso 6 — Revisar `robots.txt` para no bloquear señal útil

**Archivo:** `robots.txt`

- Permitir páginas públicas clave (`/`, `/faq`, `/knowledge.json`, `/llms.txt`).
- Mantener bloqueo de rutas privadas si existieran.
- Referenciar sitemap.

Ejemplo mínimo:

```txt
User-agent: *
Allow: /

Sitemap: https://mzrdeveloper.com/sitemap-index.xml
```

> Resultado: evitas bloquear crawling útil por accidente.

---

## Paso 7 — Medición y mantenimiento

## Qué medir

- Aparición de citas de tu web en respuestas de IA.
- Tráfico de bots en logs (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
- CTR orgánico y páginas de entrada.

## Frecuencia

- Revisión rápida semanal.
- Revisión profunda mensual (metadatos + JSON-LD + freshness).

## Regla de oro

Cada vez que cambies `config/cv.json`, actualizar:

- `llms-full.txt`.
- `knowledge.json` (si transformas campos).
- Fecha `Last-Updated` en `llms.txt`.

---

## 4) Checklist ejecutable para este repo

- [ ] Enriquecer JSON-LD en `src/layouts/Layout.astro`.
- [ ] Crear `public/llms.txt`.
- [ ] Crear `public/llms-full.txt`.
- [ ] Crear `src/pages/knowledge.json.ts`.
- [ ] Crear `src/pages/faq.astro`.
- [ ] Ajustar `robots.txt`.
- [ ] Ejecutar validación:
  - [ ] `npm run check`
  - [ ] `npm run build`

---

## 5) Qué NO hacer (anti-patrones GEO)

- Duplicar contenido masivamente para “gustar a IA”.
- Añadir palabras clave sin contexto real.
- Publicar datos inconsistentes entre HTML, JSON-LD y `cv.json`.
- Ocultar información clave detrás de scripts innecesarios.

---

## 6) Implementación mínima (MVP GEO)

Si quieres hacerlo rápido en una sola sesión:

1. `llms.txt` + `llms-full.txt`.
2. `knowledge.json`.
3. JSON-LD ampliado en layout.

Con eso ya tendrás una base GEO fuerte sin cambiar diseño ni arquitectura.

---

## 7) Siguiente paso recomendado

Aplicar el MVP GEO en este mismo repo y dejarlo validado con:

```bash
npm run check && npm run build
```

Si quieres, en el siguiente paso te lo implemento yo completo (archivos y código) en modo no disruptivo.
