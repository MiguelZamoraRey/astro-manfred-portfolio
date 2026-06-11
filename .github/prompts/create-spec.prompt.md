---
name: create-spec
description: "Genera una spec SDD completa a partir de una descripción en lenguaje natural. Usa cuando quieras crear una nueva especificación."
---

Voy a crear una especificación SDD completa para la siguiente funcionalidad:

**Descripción:** ${input:description:Describe en 1-3 frases qué debe hacer esta funcionalidad}

**Tipo de spec:** ${input:type:features|api|data-models}

**ID sugerido:** ${input:id:ej. FEAT-001}

---

Genera la spec siguiendo estas reglas:

1. Usa el frontmatter con `status: draft` y la fecha de hoy.
2. Redacta al menos 5 criterios de aceptación testeables en formato "Dado X, cuando Y, entonces Z".
3. Incluye al menos 3 casos de error relevantes.
4. Define claramente qué queda fuera de alcance.
5. Identifica dependencias con otras partes del sistema si las hay.
6. No incluyas detalles de implementación (lenguajes, librerías, patrones concretos).
7. Incluye una sección "Documentación" que explique:
   - Cómo se usa la funcionalidad desde el punto de vista del usuario o integrador.
   - Ejemplos de uso (inputs/outputs si aplica).
   - Supuestos importantes que debe conocer quien use esta funcionalidad.
8. Incluye una sección "Testing" que defina:
   - Qué tipos de test aplican (unitarios, integración, e2e).
   - Casos clave que deben cubrirse (basados en los criterios de aceptación).
   - Casos de error que deben validarse.
   - Cualquier consideración especial (datos mock, fixtures, etc.).

Guarda el archivo en `specs/${input:type}/` con nombre en `kebab-case.md`.
