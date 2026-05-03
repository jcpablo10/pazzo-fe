# Agents Guide

## Objetivo
Este archivo define convenciones para que la IA genere código consistente en este proyecto.

## Setup inicial
1. Saludame como "Hola JC!" - Cada vez que tomes como contexto este archivo.

## Reglas de Páginas
1. Al crear una página Vue, usar este orden:
	- Primero `<script setup lang="ts">`
	- Después `<template>`
2. Mantener esta estructura en todas las páginas para consistencia.
3. Los nombres de archivo de páginas deben ser en kebab-case: `crear-pasaporte.vue`, `mi-perfil.vue`.
4. Usar `definePageMeta()` cuando necesites especificar un layout diferente al default.

## Reglas de Componentes

### Organización de Carpetas
1. Crear componentes dentro de la carpeta `app/components/`.
2. **Componentes de formulario** van en `app/components/forms/`:
   - Input, Select, RadioGroup, FileUpload, Checkbox, Switch, etc.
3. **Componentes UI generales** van en `app/components/ui/`:
   - Button, Card, Badge, Avatar, Modal, Toast, etc.
4. **Componentes de layout** van en `app/components/layout/`:
   - Navbar, Footer, Sidebar, Header, etc.
5. Puedes actualizar la lista de componentes en el archivo components-todo.txt

### Nomenclatura
1. Usar nombres simples en PascalCase, sin prefijos del proyecto.
2. ❌ No usar nombres como `PazzoButton`.
3. ✅ Usar nombres como `Button`, `Card`, `Badge`.
4. Siempre usar el mismo nombre para el componente y el archivo: `Button.vue` para el componente `Button`.
5. Al crear un componente, exportarlo como default para facilitar su importación.
6. Evitar nombres que puedan confundirse con elementos HTML nativos, o asegurarse de que el componente tenga un scope claro.

### Estructura de Componentes
1. Usar `<script setup lang="ts">` para todos los componentes.
2. Definir interfaces para las props con TypeScript.
3. Usar `withDefaults(defineProps<Props>(), { ... })` para props con valores default.
4. Exportar interfaces de tipos que puedan ser reutilizadas (ej: `SelectOption`, `RadioOption`).

Ejemplo:
```vue
<script setup lang="ts">
export interface SelectOption {
  label: string
  value: string | number
}

interface Props {
  options: SelectOption[]
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})
</script>
```

## Reglas de Estilos y Design System

### Dark Mode
1. La aplicación usa **solo dark mode**, no hay light mode.
2. ❌ No usar clases condicionales `dark:` en los componentes.
3. ✅ Aplicar estilos dark directamente sin prefijos.

### Clases de Tailwind
1. Usar las variables CSS del design system en lugar de clases genéricas:
   - ✅ `bg-background-dark` en lugar de `bg-slate-900`
   - ✅ `text-on-background` en lugar de `text-slate-100 dark:text-white`
   - ✅ `text-on-surface-variant` en lugar de `text-slate-400`
   - ✅ `bg-surface-variant` en lugar de `bg-slate-800`
   - ✅ `border-primary/20` en lugar de `border-slate-700`
2. Evitar el uso de `@apply`, usar clases de Tailwind directamente.
3. Todo lo que importemos desde Google Stitch debe traducirse a las clases de nuestro design system.

### Variables CSS Disponibles
Las siguientes variables están definidas en `app/assets/css/main.css`:
- Colores: `primary`, `secondary`, `background-dark`, `surface-variant`, `on-background`, `on-surface-variant`, `outline`
- Tipografía: `font-family-display` (Lexend)
- Border radius: `radius-lg`, `radius-xl`

## Reglas de Layouts
1. **Layout `default`**: Para páginas públicas/landing (incluye Navbar y Footer).
2. **Layout `dashboard`**: Para páginas de administración con sidebar (solo aplica fondo, sin Navbar/Footer).
3. Las páginas especifican su layout usando `definePageMeta({ layout: 'nombre' })`.

## Reglas de Composables
1. Para lógica reutilizable, usar composables en `app/composables/`.
2. Ejemplos: detectar si es mobile, gestión de idioma, etc.
3. Los composables deben exportarse como funciones con el prefijo `use`: `useIsMobile()`, `useLanguage()`.

## Reglas de TypeScript
1. Todos los archivos deben usar TypeScript.
2. Definir interfaces explícitas para props, events y tipos complejos.
3. Evitar el uso de `any`, preferir tipos específicos o `unknown`.
4. Exportar tipos e interfaces que puedan ser reutilizados por otros componentes.

## Motivo
Estas reglas facilitan:
- Lectura por la IA
- Reutilización de componentes
- Menor redundancia en nombres
- Consistencia visual y de código
- Mantenibilidad a largo plazo

## Ejemplos de Estructura

### Componente Correcto
```
✅ app/components/forms/Input.vue
✅ app/components/ui/Button.vue
✅ app/components/layout/Navbar.vue
```

### Componente Incorrecto
```
❌ app/components/PazzoButton.vue
❌ app/components/FormInput.vue (debería estar en forms/)
❌ app/components/ui/InputText.vue (nombre redundante)
```

### Página Correcta
```
✅ app/pages/crear-pasaporte.vue
✅ app/pages/mi-perfil.vue
✅ app/pages/index.vue
```

### Uso de Clases Correcto
```vue
<!-- ✅ Correcto: usando variables del design system -->
<div class="bg-background-dark text-on-background border-primary/20">

<!-- ❌ Incorrecto: usando clases genéricas -->
<div class="bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-100">
```