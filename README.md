# Instalación

Instalar [Node.js](https://nodejs.org/en)

Lanzar el comando:

> npm install

Puedes probar en local con:

> npm run dev

Puedes construir una build con el comando, los resultados aparecerán en la carpeta **dist**:

> npm run build

# Instrucciones

1. Crear un perfil en [Manfred](https://www.getmanfred.com/)

2. Descargar el perfil como JSON

3. Renombrar el archivo a **cv.json**

4. Añadirlo a la carpeta **config** del proyecto

5. Añade tu curriculum en pdf a la carpeta **config**, su nombre debe ser **cv.pdf**

6. Crear un archivo **.env** en la raíz del proyecto con el siguiente contenido:

<code>
PUBLIC_SHOW_SKILLS=Y # Y or N
PUBLIC_SHOW_PROJECTS=Y # Y or N
PUBLIC_SHOW_EDUCATION=N # Y or N
PUBLIC_SHOW_LANGUAGES=N # Y or N
PUBLIC_EMAIL="" # OPCIONAL Tu email
PUBLIC_PHONE="" # OPCIONAL Tu teléfono
</code>

6. Deja los colores por defecto o modificalos en el **styles.json**

7. Si quieres deplegarlo, te recomiendo hacerte un fork de este proyecto, dejar tu estrellita y hacer deploy con [Netlify](https://www.netlify.com/)

# Créditos

Basado en el proyecto: https://github.com/midudev/minimalist-portfolio-json/tree/main

# Roadmap

- ~~Añadir comandos para despliegue en netlify~~

- ~~Añadir opciones de estilo y estilos menos minimalistas~~

- ~~Añadir panel de proyectos~~

- ~~Añadir cv descargable~~

- Añadir soporte **Multilenguaje**
