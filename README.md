
# Manual Detallado: Uso de Scripts en HTML

## ¿Qué es un script en HTML?

Un **script** en HTML se utiliza para agregar funcionalidad dinámica a las páginas web. Usualmente se escribe en **JavaScript**, aunque también se pueden usar otros lenguajes de programación. Los scripts permiten crear interactividad, manipular el DOM (Document Object Model), validar formularios, entre otras cosas.

## ¿Cómo incluir un script en HTML?

Existen dos formas principales de incluir scripts en un archivo HTML:

1. **Interno**: El código JavaScript se escribe directamente dentro de las etiquetas `<script>` en el archivo HTML.
2. **Externo**: Se enlaza un archivo JavaScript externo usando el atributo `src` dentro de la etiqueta `<script>`.

### Ejemplo 1: Script Interno

```
html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script Interno</title>
</head>
<body>
    <h1>Bienvenido a la página de ejemplos</h1>
    <p id="mensaje"></p>

    <script>
        // JavaScript interno
        document.getElementById("mensaje").innerHTML = "¡Este es un mensaje generado por JavaScript!";
    </script>
</body>
</html>
```

**Explicación**:
- El script está dentro de las etiquetas `<script>` en el cuerpo del HTML.
- Usamos `document.getElementById("mensaje")` para obtener el párrafo con el id "mensaje" y luego modificar su contenido usando `.innerHTML`.

### Ejemplo 2: Script Externo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script Externo</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Bienvenido a la página de ejemplos</h1>
    <p id="mensaje"></p>
</body>
</html>
```

Y en el archivo **script.js**:

```javascript
// JavaScript externo
document.getElementById("mensaje").innerHTML = "¡Este es un mensaje generado por JavaScript externo!";
```

**Explicación**:
- En el HTML, el script se incluye a través de la etiqueta `<script src="script.js"></script>`, donde `script.js` es el archivo JavaScript externo.
- Este archivo contiene el código JavaScript necesario para cambiar el contenido del párrafo con el id "mensaje".

## ¿Dónde colocar los scripts?

Los scripts se pueden colocar en diferentes ubicaciones dentro de un documento HTML:

1. **Dentro del `<head>`**: Si el script se carga dentro del `<head>`, el contenido de la página puede no estar disponible para cuando se ejecute el script. Por lo tanto, se recomienda usar el atributo `defer` o colocar el script al final del archivo.
   
   ```html
   <script src="script.js" defer></script>
   ```

2. **Antes de la etiqueta `</body>`**: Esta es la práctica recomendada porque asegura que el contenido HTML esté completamente cargado antes de que se ejecute el script.

   ```html
   <script src="script.js"></script>
   </body>
   ```

### Ejemplo 3: Uso de eventos con scripts

El JavaScript puede interactuar con los eventos del usuario, como clics, movimientos del ratón, teclas presionadas, entre otros.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos en JavaScript</title>
</head>
<body>
    <h1>Interactividad con JavaScript</h1>
    <button id="miBoton">Haz clic aquí</button>

    <script>
        // Agregar un evento de clic
        document.getElementById("miBoton").addEventListener("click", function() {
            alert("¡Has hecho clic en el botón!");
        });
    </script>
</body>
</html>
```

**Explicación**:
- Este código agrega un evento de clic al botón con el id "miBoton". Cuando el usuario hace clic en el botón, aparece una ventana emergente (`alert`).

### Ejemplo 4: Validación de formularios con JavaScript

Otro uso común de JavaScript en HTML es la validación de formularios. Aquí tienes un ejemplo simple para verificar que un campo no esté vacío.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de Formulario</title>
</head>
<body>
    <h1>Formulario de Registro</h1>
    <form id="formulario" onsubmit="return validarFormulario()">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre">
        <input type="submit" value="Enviar">
    </form>

    <script>
        // Validación del formulario
        function validarFormulario() {
            var nombre = document.getElementById("nombre").value;
            if (nombre === "") {
                alert("Por favor, ingresa tu nombre.");
                return false; // Impide el envío del formulario
            }
            return true; // Permite el envío del formulario
        }
    </script>
</body>
</html>
```

**Explicación**:
- Se usa el evento `onsubmit` en el formulario para llamar a la función `validarFormulario()`.
- Si el campo "nombre" está vacío, se muestra un mensaje y el formulario no se envía.

### Ejemplo 5: Cambiar el estilo de un elemento con JavaScript

Puedes manipular el estilo de los elementos HTML utilizando JavaScript.

```html
<!DOCTYPE html>
<html lang="es">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Estilo con JavaScript</title>
</head>
<body>
    <h1 id="miTitulo">Este es un título</h1>
    <button onclick="cambiarEstilo()">Cambiar Estilo</button>

    <script>
        function cambiarEstilo() {
            document.getElementById("miTitulo").style.color = "red"; // Cambiar color
            document.getElementById("miTitulo").style.fontSize = "30px"; // Cambiar tamaño
        }
    </script>
</body>
</html>
```

**Explicación**:
- El evento `onclick` en el botón llama a la función `cambiarEstilo()`.
- Esta función cambia el color y el tamaño de fuente del título cuando el botón es presionado.

## Conclusión

El uso de scripts en HTML (principalmente JavaScript) es esencial para agregar interactividad y dinámicas en las páginas web. Los ejemplos que te he proporcionado cubren desde lo más básico hasta algunos aspectos más avanzados, como la validación de formularios y el manejo de eventos. Este tipo de scripts se pueden extender para realizar acciones más complejas, y su combinación con HTML y CSS permite desarrollar páginas web mucho más funcionales e interactivas.
