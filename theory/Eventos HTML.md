
# Eventos Comunes en Elementos HTML

## 1. `onclick`
Se dispara cuando un elemento HTML es clickeado.

**Ejemplo:**
```html
<button onclick="alert('¡Botón clickeado!')">Haz clic aquí</button>
```

---

## 2. `onchange`
Se dispara cuando el valor de un elemento cambia (como un `<select>` o un `<input>`).

**Ejemplo:**
```html
<select onchange="alert('Seleccionaste algo!')">
    <option value="1">Opción 1</option>
    <option value="2">Opción 2</option>
</select>
```

---

## 3. `onmouseover`
Se dispara cuando el mouse pasa sobre un elemento.

**Ejemplo:**
```html
<div onmouseover="alert('¡Estás sobre el cuadro!')" style="width:100px; height:100px; background-color:lightblue;">
    Pasa el mouse aquí
</div>
```

---

## 4. `onmouseout`
Se dispara cuando el mouse sale de un elemento.

**Ejemplo:**
```html
<div onmouseout="alert('¡Saliste del cuadro!')" style="width:100px; height:100px; background-color:lightcoral;">
    Sal de aquí
</div>
```

---

## 5. `onfocus`
Se dispara cuando un elemento (como un campo de texto) recibe el foco.

**Ejemplo:**
```html
<input type="text" onfocus="this.style.backgroundColor='yellow'" placeholder="Haz clic aquí">
```

---

## 6. `onblur`
Se dispara cuando un elemento pierde el foco.

**Ejemplo:**
```html
<input type="text" onblur="this.style.backgroundColor='white'" placeholder="Escribe algo y sal del campo">
```

---

## 7. `oninput`
Se dispara cuando el usuario escribe algo en un campo de texto.

**Ejemplo:**
```html
<input type="text" oninput="console.log(this.value)" placeholder="Escribe algo...">
```

---

## 8. `onkeydown`
Se dispara cuando una tecla es presionada mientras el foco está en un elemento.

**Ejemplo:**
```html
<input type="text" onkeydown="alert('Presionaste una tecla!')" placeholder="Presiona una tecla">
```

---

## 9. `onkeyup`
Se dispara cuando una tecla es soltada mientras el foco está en un elemento.

**Ejemplo:**
```html
<input type="text" onkeyup="alert('Soltaste una tecla!')" placeholder="Suelta la tecla">
```

---

## 10. `onsubmit`
Se dispara cuando se envía un formulario.

**Ejemplo:**
```html
<form onsubmit="alert('Formulario enviado!'); return false;">
    <input type="text" placeholder="Escribe algo" required>
    <button type="submit">Enviar</button>
</form>
```

---

## 11. `onreset`
Se dispara cuando se reinicia un formulario.

**Ejemplo:**
```html
<form onreset="alert('Formulario reiniciado!')">
    <input type="text" placeholder="Escribe algo">
    <button type="reset">Reiniciar</button>
</form>
```

---

## 12. `ondblclick`
Se dispara cuando un elemento es doble clickeado.

**Ejemplo:**
```html
<button ondblclick="alert('¡Botón doble clickeado!')">Doble clic aquí</button>
```

---

## 13. `oncontextmenu`
Se dispara cuando se abre el menú contextual (clic derecho) en un elemento.

**Ejemplo:**
```html
<div oncontextmenu="alert('¡Menú contextual bloqueado!'); return false;" style="width:100px; height:100px; background-color:lightgreen;">
    Clic derecho aquí
</div>
```

---

## 14. `onload`
Se dispara cuando un elemento (como una imagen o el documento) se carga completamente.

**Ejemplo:**
```html
<img src="https://via.placeholder.com/150" onload="alert('Imagen cargada!')">
```

---

## 15. `onunload`
Se dispara cuando la página o ventana se está cerrando.

**Ejemplo:**
```html
<body onunload="alert('Adiós!')">
    Intenta cerrar esta ventana.
</body>
```

---

## Cómo Usar Eventos con `addEventListener` (Método Moderno)
En lugar de escribir los eventos directamente en el HTML, es una buena práctica manejarlos con JavaScript utilizando `addEventListener`.

**Ejemplo:**
```html
<button id="miBoton">Haz clic aquí</button>
<script>
    document.getElementById('miBoton').addEventListener('click', function() {
        alert('¡Botón clickeado!');
    });
</script>
```
