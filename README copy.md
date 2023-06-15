# **💪 HW3 | Promises - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework crearemos una ruta GET que realizará una peticion asincrónica a la API de Rick & Morty. De esta manera podremos obtener un personaje por **id**, y podremos enviar esta información a nuestro Front-End.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Controlador**

Instala la librería **`axios`**. Luego dirígete a la carpeta **controllers** y crea un archivo llamado **`getCharById.js`**. Dentro de este archivo deberás:

1. Crea y exporta una función llamada **`getCharById`**. Esta recibirá dos parámetros: **res** y **id**.

2. Dentro de esta función deberás realizar una petición a la API **`https://rickandmortyapi.com/api/character/:id`** de Rick & Morty. Utiliza promesas y no olvides que el **id** que utilices debe ser el que recibes por parámetro.

> **[NOTA]:** tendrás que importar **`axios`**.

3. Una vez que tienes la respuesta de tu petición crea un objeto en el que guardes las siguientes propiedades del personaje: **id** (lo recibes por parámetro), **name**, **gender**, **species**, **origin**, **image** y **status**.

> [**NOTA**]: revisa cómo es la estructura de la respuesta que recibes de la API para poder acceder correctamente a los datos.

4. Una vez creado el objeto, devuelve una respuesta en formato JSON y status igual a 200 con el personaje que obtuviste.

5. Concatena un **`.catch`** al final de la promesa para poder manejar el error. Dentro de él deberás devolver una respuesta con status **`500`**, un Content-Type igual a **`text/plain`**, y finalmente responder con la propiedad **`message`** del error.

<br />

---

### **👩‍💻 EJERCICIO 2 | Ruta**

Dirígete al archivo **`index.js`** y elimina el condicional que creaste en la homework anterior. También elimina la importación y el archivo **`data.js`**.

1. Importa tu controlador **`getCharById`**.

2. Crea un condicional que pregunte si la **url** incluye el string "**`/rickandmorty/character`**". En el caso de que si lo incluya deberás ejecutar el controlador que creamos en el ejercicio anterior pasándole como argumentos:

   -  El primer parámetro debe ser parámetro **`res`**.
   -  El segundo parámetro debe ser el **id** del personaje que recibes mediante la como parámetro.

   > **[NOTA]:** dentro del parámetro **`req.url`** está el id del personaje.

<br />

---

### **👀 COMPROBEMOS...**

Levanta tu proyecto del lado Front-End y Back-End. Hasta este momento deberías poder utilizar tu aplicación con normalidad y poder buscar un personaje con cualquier **id**.

<img src="./img/example.gif" alt="" />
