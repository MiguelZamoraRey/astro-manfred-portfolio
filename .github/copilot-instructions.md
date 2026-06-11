# Spec-Driven Development — Instrucciones globales para Copilot

Este proyecto sigue la metodología **Spec-Driven Development (SDD)**.

## Regla principal

Antes de generar, modificar o sugerir código, **busca si existe una spec** relacionada en la carpeta `specs/`. Si existe, úsala como fuente de verdad. Si no existe, pide al usuario que la cree antes de continuar.

## Comportamiento esperado

- Cuando el usuario pida implementar algo, pregunta: "¿Existe una spec para esto? ¿En qué archivo está?"
- Al generar código, referencia explícitamente los criterios de aceptación de la spec que estás satisfaciendo.
- Al generar tests, cada test debe poder trazarse a un criterio de aceptación de la spec.
- Si la spec y el código existente entran en conflicto, señala el conflicto y pregunta al usuario cuál es correcto —no asumas.
- No agregues lógica que no esté cubierta por la spec sin avisar al usuario.

## Estructura de specs

Las specs viven en `specs/` organizadas por tipo:

- `specs/features/` — funcionalidades de usuario
- `specs/api/` — contratos de API (endpoints, request/response)
- `specs/data-models/` — modelos de datos y esquemas

## Estados de una spec

Una spec pasa por estos estados definidos en su frontmatter:

- `draft` — en redacción, no implementar todavía
- `review` — lista para revisión de equipo
- `approved` — aprobada, se puede implementar
- `implemented` — ya tiene código generado

Solo implementa specs con estado `approved`.

## Formato de respuesta al implementar

Cuando implementes desde una spec, estructura tu respuesta así:

1. Lista los criterios de aceptación que vas a cubrir
2. Genera el código
3. Genera los tests correspondientes
4. Indica si algún criterio quedó sin cubrir y por qué
