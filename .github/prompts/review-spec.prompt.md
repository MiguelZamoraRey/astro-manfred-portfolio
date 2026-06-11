---
name: review-spec
description: "Revisa una spec SDD en busca de ambigüedades, criterios incompletos y casos de borde faltantes. Usa antes de cambiar el status a approved."
---

Voy a revisar esta spec SDD:

**Archivo de spec:** ${input:specFile:Ruta al archivo de spec, ej. specs/features/user-auth.md}

---

Revisa la spec en `${input:specFile}` y evalúa los siguientes puntos. Para cada uno, indica si pasa ✅ o falla ❌ y explica por qué:

**Completitud del frontmatter**

- ¿Tiene todos los campos requeridos? (id, title, status, created, updated, owner)

**Criterios de aceptación**

- ¿Son testeables? (evita frases como "debe ser rápido" o "debe ser fácil de usar")
- ¿Cubren el camino feliz?
- ¿Son suficientes para validar la funcionalidad de forma completa?

**Casos de error**

- ¿Están definidos los escenarios de error más probables?
- ¿Está especificada la respuesta del sistema ante cada error?

**Claridad y precisión**

- ¿Hay ambigüedades o términos sin definir?
- ¿Hay criterios contradictorios entre sí?

**Alcance**

- ¿Está definido el "fuera de alcance"?
- ¿La spec intenta abarcar demasiado?

**Dependencias**

- ¿Están listadas las dependencias externas o de otros módulos?

**Consideraciones de seguridad**

Evalúa la spec usando principios de OWASP (Open Web Application Security Project), especialmente OWASP Top 10. Para cada punto, indica si aplica ✅ / ❌ / N/A y explica:

**Entrada de datos y validación**

- ¿Se especifica validación de inputs (frontend y backend)?
- ¿Se contemplan ataques comunes como inyección (SQL, XSS, etc.)?

**Autenticación y autorización**

- ¿Se define claramente quién puede acceder a qué?
- ¿Se contemplan roles/permisos?
- ¿Hay riesgo de escalada de privilegios?

**Gestión de datos sensibles**

- ¿Se identifican datos sensibles (passwords, tokens, emails, etc.)?
- ¿Se especifica cómo se almacenan (hash, cifrado)?
- ¿Se evita exponer datos sensibles en logs o respuestas?

**Gestión de sesiones**

- ¿Se define cómo se manejan sesiones/tokens?
- ¿Hay expiración, refresh, logout seguro?

**Errores y logging**

- ¿Los errores evitan filtrar información sensible?
- ¿Se define logging útil pero seguro?

**Dependencias externas**

- ¿Se consideran riesgos de APIs externas o librerías?
- ¿Se requiere validación/sanitización de respuestas externas?

**Abuso y edge cases maliciosos**

- ¿Se contemplan usos indebidos (spam, brute force, scraping)?
- ¿Se definen límites (rate limiting, throttling)?

**Superficie de ataque**

- ¿Se han identificado endpoints o acciones críticas?
- ¿Se minimiza la exposición innecesaria?

> Si la spec maneja autenticación, pagos, datos personales o inputs del usuario, esta sección no puede marcarse como completa sin cubrir al menos validación, autorización y datos sensibles.

Al final, dame una recomendación preguntando en formato de formulario:

- Si la spec está lista: "Puedes cambiar el status a `review` o `approved`."
- Si necesita cambios: lista los cambios prioritarios numerados.
