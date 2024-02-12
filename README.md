# Intalación

Instalar [Node.js](https://nodejs.org/en)

Lanzar el comando:

> npm install

Puedes probar en local con:

> npm run dev

Puedes construir una build con el comando, los resultados aparecerán en la carpeta **dist**:

> npm run build

Tras crear en firebase un proyecto puedes lanzar el siguiente comando para desplegar el portfolio

> npm run deploy

# Instrucciones

1. Crear un perfil en [Manfred](https://www.getmanfred.com/)

2. Descargar el perfil como JSON

3. Renombrar el archivo a **cv.json**

4. Añadirlo a la carpeta **config** del proyecto

5. Crear un archivo en la carpeta **config** llamado **external.json** con el siguiente contenido:

<code>
{
    "contact":{
        "phone":"666 666 666",
        "email":"tuemail@tudominio.com"
    },
    "showSections":{
        "showSkills": true,
        "showProjects": true,
        "showEducation":false,
        "showLanguages":false
    }
}
</code>

_Si no quieres que aparezca ninguno de los dos campos, simplemente ponlos como null_

6. Deja los colores por defecto o modificalos en el **styles.json**

7. Ve a [firebase](https://firebase.google.com/?hl=es), allí podrás crear un proyecto de tipo hosting, y sigue las instrucciones.

# Créditos

Basado en el proyecto: https://github.com/midudev/minimalist-portfolio-json/tree/main

# Roadmap

- ~~Añadir comandos para despliegue en firebase~~

- ~~Añadir opciones de estilo y estilos menos minimalistas~~

- ~~Añadir panel de proyectos~~

- Añadir soportes **Multilenguaje**
