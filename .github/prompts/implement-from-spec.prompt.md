---
name: implement-from-spec
description: "Implementa código y tests a partir de una spec SDD aprobada. Usa cuando tengas una spec con status: approved lista para codificar."
---

Voy a implementar el código correspondiente a esta spec:

**Archivo de spec:** ${input:specFile:Ruta al archivo de spec, ej. specs/features/user-auth.md}

---

Sigue este proceso:

1. **Lee la spec completa** en `${input:specFile}`.
2. **Verifica** que el `status` sea `approved`. Si no lo es, detente y avisa.
3. **Lista los criterios de aceptación** que vas a cubrir antes de generar código.
4. **Genera el código fuente** en `src/`, referenciando el ID de cada criterio en los comentarios.
5. **Genera los tests** en `tests/`, con un test por criterio de aceptación y por caso de error.
6. **Reporta** qué criterios quedaron cubiertos y si alguno no pudo implementarse.
7. **No implementes** lógica no descrita en la spec sin avisarme primero.

Al terminar, muéstrame el resumen de cobertura en este formato:

```
Criterios cubiertos: AC-1, AC-2, AC-3
Casos de error cubiertos: CE-1, CE-2
Criterios pendientes: ninguno / [lista con motivo]
```
