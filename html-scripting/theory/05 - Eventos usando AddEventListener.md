
# Manual de Eventos en JavaScript con `addEventListener`

## ¿Qué es un Evento en JavaScript?

Un evento es cualquier interacción que ocurre en una página web y que puede ser detectada por JavaScript. Algunos ejemplos de eventos comunes son:

- **Clics:** Cuando el usuario hace clic en un elemento.
- **Movimientos del ratón:** Cuando el ratón pasa sobre un elemento.
- **Teclado:** Cuando se presiona una tecla.
- **Carga:** Cuando la página o un recurso específico ha terminado de cargar.

---

## ¿Qué es `addEventListener`?

`addEventListener` es un método en JavaScript que permite registrar un evento a un elemento del DOM. A diferencia de los manejadores de eventos inline o de atributos como `onclick`, `addEventListener` es más flexible, ya que permite:

- Registrar múltiples eventos en un mismo elemento.
- Usar funciones reutilizables como manejadores.
- Controlar fases del evento como captura y burbuja.

---

## Sintaxis de `addEventListener`

```javascript
// Sintaxis básica
element.addEventListener(tipoEvento, manejador, opciones);
```

### Parámetros

1. **`tipoEvento`**: Especifica el tipo de evento como una cadena (por ejemplo, `"click"`, `"mouseover"`).
2. **`manejador`**: La función que se ejecutará cuando ocurra el evento.
3. **`opciones`** (opcional): Un objeto que puede incluir propiedades como:
   - `capture`: Define si el evento se debe manejar durante la fase de captura.
   - `once`: Indica si el evento debe ejecutarse solo una vez.
   - `passive`: Indica si el manejador no llamará `preventDefault`.

---

## Ejemplos Completos con `addEventListener`

### **Ejemplo 1: Cambiar el texto de un botón al hacer clic**

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo 1</title>
</head>
<body>
    <button id="miBoton">Haz clic aquí</button>
    <script src="script1.js"></script>
</body>
</html>
```

#### JavaScript (`script1.js`):
```javascript
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
    boton.textContent = '¡Clickeado!';
});
```

---

### **Ejemplo 2: Cambiar el color de fondo al pasar el ratón sobre un div**

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo 2</title>
    <style>
        #miDiv {
            width: 200px;
            height: 100px;
            background-color: lightgray;
        }
    </style>
</head>
<body>
    <div id="miDiv">Pasa el ratón por aquí</div>
    <script src="script2.js"></script>
</body>
</html>
```

#### JavaScript (`script2.js`):
```javascript
const div = document.getElementById('miDiv');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'lightgray';
});
```

---

### **Ejemplo 3: Contador de clics en un botón**

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo 3</title>
</head>
<body>
    <button id="contador">Clics: 0</button>
    <script src="script3.js"></script>
</body>
</html>
```

#### JavaScript (`script3.js`):
```javascript
const boton = document.getElementById('contador');
let contador = 0;

boton.addEventListener('click', () => {
    contador++;
    boton.textContent = `Clics: ${contador}`;
});
```

---

### **Ejemplo 4: Validar un formulario**

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo 4</title>
</head>
<body>
    <form id="miFormulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre">
        <button type="submit">Enviar</button>
    </form>
    <p id="mensaje"></p>
    <script src="script4.js"></script>
</body>
</html>
```

#### JavaScript (`script4.js`):
```javascript
const formulario = document.getElementById('miFormulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        mensaje.textContent = 'El nombre es obligatorio';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = `¡Hola, ${nombre}!`;
        mensaje.style.color = 'green';
    }
});
```

---

### **Ejemplo 5: Lista dinámica**

#### HTML (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejemplo 5</title>
</head>
<body>
    <input type="text" id="nuevaTarea" placeholder="Escribe una tarea">
    <button id="agregarTarea">Agregar</button>
    <ul id="listaTareas"></ul>
    <script src="script5.js"></script>
</body>
</html>
```

#### JavaScript (`script5.js`):
```javascript
const boton = document.getElementById('agregarTarea');
const input = document.getElementById('nuevaTarea');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {
    const textoTarea = input.value;
    if (textoTarea.trim() === '') return;

    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';

    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevaTarea);
    });

    nuevaTarea.appendChild(botonEliminar);
    lista.appendChild(nuevaTarea);
    input.value = '';
});
```

---

## Notas Finales
- Usa `addEventListener` en lugar de atributos inline (`onclick`, `onmouseover`) para mantener una separación clara entre HTML, CSS y JavaScript.
- Recuerda siempre eliminar los manejadores de eventos si ya no son necesarios para evitar fugas de memoria.

Con esta guía y los ejemplos prácticos, puedes dominar el uso de `addEventListener` para crear páginas web interactivas. ¡Manos a la obra!
