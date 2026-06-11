---
applyTo: "src/**,tests/**"
description: "Guías para implementar código a partir de specs aprobadas. Se aplica a archivos en src/ y tests/."
---

# Cómo implementar desde una spec SDD

## Antes de escribir código

1. Localiza la spec en `specs/`. Si no existe, detente y pide que se cree.
2. Verifica que el `status` de la spec sea `approved`. No implementes specs en `draft` o `review`.
3. Lee **todos** los criterios de aceptación antes de empezar.

## Al generar código

- Implementa **un criterio de aceptación a la vez**. Es mejor hacer menos de forma correcta.
- Añade un comentario en el código referenciando el ID del criterio. Ejemplo: `// AC-1: Autenticación con credenciales válidas`
- No agregues lógica extra que no esté cubierta por la spec. Si crees que falta algo, detente y señálalo.

## Al generar tests

- Cada test debe mapear a un criterio de aceptación o caso de error de la spec.
- Nombra los tests de forma que referencien el criterio. Ejemplo: `test("AC-1: devuelve token cuando las credenciales son válidas")`
- No generes tests para comportamientos no descritos en la spec.

## Después de implementar

Actualiza el `status` de la spec a `implemented` y registra la fecha en el frontmatter:

```yaml
status: implemented
updated: YYYY-MM-DD
```

## Red flags — detente si encuentras esto

- La spec dice algo diferente a lo que el código existente hace → señala el conflicto
- Un criterio de aceptación es ambiguo o imposible de implementar → pide aclaración
- La implementación requeriría crear lógica no cubierta por ningún criterio → advierte al usuario
