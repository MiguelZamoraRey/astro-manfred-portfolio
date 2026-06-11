---
applyTo: "specs/**/*.md"
description: "Guías para redactar specs en este proyecto SDD. Se aplica automáticamente a todos los archivos en specs/."
---

# Cómo escribir especificaciones SDD

## Reglas de redacción

1. **Una spec = una responsabilidad.** No combines dos features en un solo archivo.
2. **Criterios de aceptación en lenguaje testeable.** Usa frases del tipo "Dado X, cuando Y, entonces Z".
3. **Sé explícito sobre los límites.** Si algo está fuera de alcance, escríbelo en la sección `## Fuera de alcance`.
4. **Evita detalles de implementación.** La spec describe el "qué", no el "cómo".
5. **Incluye casos de error.** No solo el camino feliz. Especifica qué pasa cuando ocurre un error.

## Frontmatter obligatorio

Todo archivo de spec debe comenzar con este bloque YAML:

```yaml
---
id: FEAT-001 # Identificador único (FEAT, API, DATA según tipo)
title: Nombre legible
status: draft # draft | review | approved | implemented
created: YYYY-MM-DD
updated: YYYY-MM-DD
owner: nombre-o-equipo
---
```

## Estructura de una spec de feature

```markdown
## Resumen

Una o dos frases que describen qué hace esta funcionalidad y para quién.

## Contexto

Por qué se necesita. Background relevante.

## Criterios de aceptación

- [ ] AC-1: Dado [contexto], cuando [acción], entonces [resultado esperado]
- [ ] AC-2: ...

## Casos de error

- CE-1: Si [condición], el sistema debe [respuesta]
- CE-2: ...

## Fuera de alcance

- Lista de cosas que explícitamente NO cubre esta spec

## Dependencias

- Lista de otras specs o módulos que deben existir primero
```

## Criterios de una spec lista para revisión (`review`)

Antes de cambiar el estado a `review`, verifica:

- [ ] Tiene frontmatter completo
- [ ] Tiene al menos 3 criterios de aceptación
- [ ] Incluye al menos un caso de error
- [ ] No tiene ambigüedades en los criterios (frases como "el sistema debe ser rápido" no son testeables)
- [ ] Tiene la sección "Fuera de alcance" completa
