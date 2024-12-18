
# Selectores en CSS

## 1. ¿Qué es un Selector en CSS?

En CSS, los selectores son patrones utilizados para seleccionar y aplicar estilos a los elementos HTML. Un selector indica al navegador qué elemento o conjunto de elementos debe ser estilizado con las propiedades especificadas en la hoja de estilos.

---

## 2. Tipos de Selectores

### 2.1 Selector Universal

El selector universal (`*`) selecciona todos los elementos de una página web.

**Ejemplo:**

```css
* {
  margin: 0;
  padding: 0;
}
```

Este código elimina el margen y el relleno de todos los elementos en la página.

---

### 2.2 Selectores de Tipo

El selector de tipo selecciona todos los elementos de un tipo específico. Por ejemplo, seleccionar todos los párrafos (`<p>`) o todas las cabeceras (`<h1>`).

**Ejemplo:**

```css
p {
  color: blue;
}
```

Este código aplica el color azul a todos los párrafos en la página.

---

### 2.3 Selectores de Clase

El selector de clase selecciona elementos que tienen una clase específica. Se usa el símbolo `.` seguido del nombre de la clase.

**Ejemplo:**

```css
.button {
  background-color: red;
  color: white;
}
```

Este código estiliza todos los elementos que tienen la clase `button`.

---

### 2.4 Selectores de ID

El selector de ID selecciona un único elemento que tiene un identificador único (ID). Se usa el símbolo `#` seguido del nombre del ID.

**Ejemplo:**

```css
#header {
  background-color: green;
  color: white;
}
```

Este código aplica estilos solo al elemento con el ID `header`.

---

### 2.5 Selectores de Atributo

Seleccionan elementos basados en los atributos que tienen.

**Ejemplo:**

```css
input[type="text"] {
  border: 1px solid black;
}
```

Este código aplica estilos a todos los campos de entrada de tipo texto (`<input type="text">`).

---

### 2.6 Selectores Descendientes

Selecciona elementos que son descendientes de un elemento padre. El selector descendiente se define con un espacio entre los selectores.

**Ejemplo:**

```css
div p {
  color: red;
}
```

Este código aplica el color rojo a todos los párrafos que están dentro de un `<div>`.

---

### 2.7 Selectores de Hijos Directos

Selecciona solo los elementos que son hijos directos de un elemento padre. Se usa el símbolo `>`.

**Ejemplo:**

```css
div > p {
  color: blue;
}
```

Este código aplicará el color azul solo a los párrafos que son hijos directos de un `<div>`.

---

### 2.8 Selectores de Hermanos Adyacentes

Selecciona el primer hermano adyacente de un elemento. Se usa el símbolo `+`.

**Ejemplo:**

```css
h1 + p {
  color: green;
}
```

Este código aplicará el color verde solo al primer párrafo que sigue a un `<h1>`.

---

### 2.9 Selectores de Pseudo-Clases

Las pseudo-clases seleccionan elementos basados en su estado o posición.

**Ejemplo:**

```css
a:hover {
  color: orange;
}

p:first-child {
  font-weight: bold;
}
```

---

### 2.10 Selectores de Pseudo-Elementos

Las pseudo-elementos permiten seleccionar una parte específica de un elemento, como la primera letra o línea de un párrafo.

**Ejemplo:**

```css
h1::before {
  content: "👉 ";
  color: red;
}
```

---

## 3. Conclusión

Los selectores son fundamentales para aplicar estilos a los elementos HTML. Con una combinación de selectores básicos y avanzados, puedes seleccionar y estilizar cualquier parte de tu página web de manera precisa. Este manual cubre los selectores más comunes y su aplicación, con ejemplos prácticos para ayudar a dominar su uso en proyectos de desarrollo web.
