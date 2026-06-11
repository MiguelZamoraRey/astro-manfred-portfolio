# Spec-Driven Development — Plantilla para VS Code

Esta plantilla establece un flujo de trabajo basado en **Spec-Driven Development (SDD)** integrado con GitHub Copilot en VS Code. La idea central es simple: **escribe la especificación primero, luego el código**.

---

## ¿Qué es Spec-Driven Development?

SDD es una metodología donde cada unidad de trabajo —feature, endpoint, módulo— comienza con una especificación escrita y revisada antes de tocar el código. Copilot lee esas specs y las usa como contexto para generar, revisar y validar implementaciones.

**Flujo básico:**

```
1. Escribir la spec  →  2. Revisar la spec  →  3. Implementar  →  4. Validar contra la spec
```

---

## Estructura del proyecto

```
.
├── .github/
│   ├── copilot-instructions.md          # Instrucciones globales para Copilot
│   ├── instructions/
│   │   ├── spec-writing.instructions.md # Cómo escribir specs correctamente
│   │   └── implementation.instructions.md # Cómo implementar desde specs
│   ├── prompts/
│   │   ├── create-spec.prompt.md        # Genera una spec desde una descripción
│   │   ├── implement-from-spec.prompt.md # Implementa código desde una spec
│   │   ├── review-spec.prompt.md        # Revisa y mejora una spec existente
│   │   └── teach-impeccable.prompt.md   # Captura contexto de diseño del proyecto
│   └── skills/
│       └── impeccable/                  # Skill de diseño frontend production-grade
│           ├── SKILL.md
│           └── references/              # Guías de tipografía, color, motion, etc.
├── specs/
│   ├── features/                        # Specs de funcionalidades
│   ├── api/                             # Specs de endpoints y contratos de API
│   ├── data-models/                     # Specs de modelos de datos
│   └── _template.md                     # Plantilla base para nuevas specs
├── src/                                 # Código fuente (generado desde specs)
├── tests/                               # Tests (derivados de las specs)
├── .impeccable.md                       # Contexto de diseño (generado por /teach-impeccable)
└── README.md
```

---

## Cómo empezar

### Requisitos previos

- [VS Code](https://code.visualstudio.com/) con la extensión **GitHub Copilot** instalada
- Copilot con modo **Agent** habilitado

### Paso 1 — Clonar o usar esta plantilla

```bash
git clone <url-del-repo> mi-proyecto
cd mi-proyecto
```

O usa el botón **"Use this template"** en GitHub.

### Paso 2 — Abrir en VS Code

```bash
code .
```

Las instrucciones en `.github/copilot-instructions.md` se cargan automáticamente y le dicen a Copilot cómo operar en modo SDD.

### Paso 3 — Escribir tu primera spec

Usa el prompt `/create-spec` en el chat de Copilot, o copia `specs/_template.md` y rellénalo manualmente.

Guarda la spec en la carpeta correspondiente:

- `specs/features/` para funcionalidades de usuario
- `specs/api/` para contratos de API
- `specs/data-models/` para modelos de datos

### Paso 4 — Revisar la spec

Usa el prompt `/review-spec` apuntando al archivo recién creado. Copilot identificará ambigüedades, casos de borde faltantes y criterios de aceptación incompletos.

### Paso 5 — Implementar desde la spec

Usa el prompt `/implement-from-spec` apuntando a la spec aprobada. Copilot generará el código y los tests en `src/` y `tests/` respectivamente, tomando la spec como fuente de verdad.

### Paso 6 — Validar

Revisa que la implementación cubra **todos** los criterios de aceptación definidos en la spec. Si algo falta, actualiza el código —no la spec— a menos que sea un error en la especificación misma.

---

## Convenciones

| Elemento                         | Convención                                               |
| -------------------------------- | -------------------------------------------------------- |
| Nombre de spec                   | `kebab-case.md` (ej. `user-authentication.md`)           |
| Estado de spec                   | `draft` → `review` → `approved` → `implemented`          |
| Un archivo = una responsabilidad | Cada spec describe una sola feature, endpoint o modelo   |
| La spec manda                    | Si hay conflicto entre spec y código, el código está mal |

---

## Prompts disponibles

Escribe `/` en el chat de Copilot para ver los prompts disponibles:

| Prompt                 | Descripción                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `/create-spec`         | Genera una spec completa desde una descripción en lenguaje natural |
| `/implement-from-spec` | Genera código y tests a partir de una spec aprobada                |
| `/review-spec`         | Revisa una spec en busca de ambigüedades y criterios incompletos   |
| `/teach-impeccable`    | Captura el contexto de diseño del proyecto en `.impeccable.md`     |

## Skills disponibles

Los skills son workflows multi-paso que se invocan también con `/`:

| Skill         | Descripción                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `/impeccable` | Diseño e implementación de interfaces frontend production-grade, no genéricas |

### Flujo de uso del skill impeccable

```
1. /teach-impeccable   → captura audiencia, tono y restricciones → genera .impeccable.md
2. /impeccable         → usa .impeccable.md como contexto para diseñar e implementar UI
```

---

## Recursos

- [GitHub Copilot Customization Docs](https://docs.github.com/en/copilot/customizing-copilot)
- [Spec-Driven Development — introducción](https://nordicapis.com/spec-driven-development-sdds/)
