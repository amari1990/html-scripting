
# Introducción a CSS

## 1. ¿Qué es CSS?

CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. CSS permite controlar el aspecto visual de las páginas web, como los colores, las fuentes, el espaciado, y el diseño en general, separando el contenido del diseño.

## 2. Tipos de CSS

### 2.1 CSS Inline (en línea)

El CSS en línea se aplica directamente dentro de los elementos HTML mediante el atributo `style`. Es útil para aplicar estilos rápidos a elementos individuales.

**Ejemplo**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de CSS Inline</title>
</head>
<body>
  <h1 style="color: blue; text-align: center;">¡Hola Mundo!</h1>
  <p style="font-size: 16px; color: red;">Este es un párrafo con estilo en línea.</p>
</body>
</html>
```

### 2.2 CSS Interno (Incrustado)

El CSS interno se coloca dentro de una etiqueta `<style>` en la sección `<head>` de un documento HTML. Es útil cuando deseas aplicar estilos a toda una página web específica.

**Ejemplo**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de CSS Interno</title>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: red;
    }
  </style>
</head>
<body>
  <h1>¡Hola Mundo!</h1>
  <p>Este es un párrafo con CSS interno.</p>
</body>
</html>
```

### 2.3 CSS Externo

El CSS externo se coloca en un archivo separado con la extensión `.css`. Este archivo se enlaza al HTML mediante una etiqueta `<link>` en la sección `<head>`. Esta es la forma más eficiente de aplicar estilos, ya que permite reutilizar el mismo archivo CSS en varias páginas web.

**Ejemplo HTML**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de CSS Externo</title>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <h1>¡Hola Mundo!</h1>
  <p>Este es un párrafo con CSS externo.</p>
</body>
</html>
```

**Ejemplo CSS (estilos.css)**:

```css
h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 16px;
  color: red;
}
```

## 3. Selectores en CSS

Los selectores se utilizan para "seleccionar" los elementos HTML que deseas estilizar.

- **Selector de tipo**:

  ```css
  p { color: green; }
  ```

- **Selector de clase**:

  ```css
  .miClase { color: blue; }
  ```

- **Selector de ID**:

  ```css
  #miID { font-size: 20px; }
  ```

## 4. Lista de Propiedades Comunes en CSS

- **Color y Fondo**:
  - `color`: Establece el color del texto.
  - `background-color`: Define el color de fondo de un elemento.
- **Texto**:
  - `font-size`: Cambia el tamaño de la fuente.
  - `text-align`: Alinea el texto (`left`, `right`, `center`, `justify`).
- **Bordes y Espaciado**:
  - `margin`: Define el espacio exterior de un elemento.
  - `padding`: Define el espacio interior de un elemento.
- **Dimensiones**:
  - `width`: Establece el ancho de un elemento.
  - `height`: Establece la altura de un elemento.
- **Visualización y Posicionamiento**:
  - `display`: Controla el tipo de caja de un elemento (`block`, `inline`, `none`).
  - `position`: Controla la posición de un elemento (`static`, `relative`, `absolute`, `fixed`).

## 5. Ejemplo Completo con CSS Externo

**Archivo HTML**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo Completo de CSS Externo</title>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <header>
    <h1>Mi Página Web</h1>
  </header>
  <main>
    <section class="contenido">
      <h2>Sección 1</h2>
      <p>Este es un párrafo en la primera sección.</p>
    </section>
    <section class="contenido">
      <h2>Sección 2</h2>
      <p>Este es un párrafo en la segunda sección.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Mi Página Web</p>
  </footer>
</body>
</html>
```

**Archivo CSS (estilos.css)**:

```css
/* Estilos para el encabezado */
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

/* Estilos para el contenido */
.contenido {
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 10px;
}

h2 {
  color: #333;
}

/* Estilos para el pie de página */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
```

## 6. Recursos Adicionales

- [W3Schools CSS](https://www.w3schools.com/css/)
- [MDN Web Docs CSS](https://developer.mozilla.org/es/docs/Web/CSS)
