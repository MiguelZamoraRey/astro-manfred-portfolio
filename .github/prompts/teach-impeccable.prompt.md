---
name: teach-impeccable
description: "Captura el contexto de diseño del proyecto (audiencia, tono, marca) y lo guarda en .impeccable.md. Ejecuta este prompt una vez antes de usar el skill /impeccable."
---

Voy a capturar el contexto de diseño de este proyecto para que el skill `/impeccable` pueda usarlo como referencia en todas las tareas de UI/UX.

Responde estas preguntas:

**1. ¿Quién usa este producto?**
${input:audience:Describe el perfil del usuario principal — edad, contexto de uso, nivel técnico, etc.}

**2. ¿Qué intenta conseguir el usuario?**
${input:useCases:Describe los 2-3 trabajos principales que el usuario viene a hacer}

**3. ¿Cómo debe sentirse la interfaz?**
${input:tone:Ej: profesional y contenida, juguetona y expresiva, minimalista y rápida, cálida y accesible...}

**4. ¿Hay restricciones técnicas o de diseño?**
${input:constraints:Framework, accesibilidad, rendimiento, soporte de navegadores, sistema de diseño existente...}

**5. ¿Existe alguna referencia visual que te guste?**
${input:references:URLs, nombres de productos o adjetivos que describan la dirección visual deseada (opcional)}

---

Con esas respuestas, genera el archivo `.impeccable.md` en la raíz del proyecto con este formato:

```markdown
# Design Context

## Target Audience

[Respuesta elaborada]

## Use Cases

[Lista de 2-3 jobs-to-be-done principales]

## Brand Personality & Tone

[Descripción del tono y personalidad visual]

## Technical Constraints

[Restricciones técnicas y de diseño]

## Visual References

[Referencias visuales o "none provided"]

## Design Direction Notes

[Síntesis de 2-3 frases: qué hace que este producto sea único y cómo debe diferenciarse visualmente]
```

Tras crear el archivo, confirma que el skill `/impeccable` ya puede usarlo como contexto en las siguientes tareas de diseño.
