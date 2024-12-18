
# Formas de aplicar CSS y herencia

## 1. Aplicación de CSS en Elementos HTML (CSS Externo)

En este ejemplo, utilizamos CSS externo para aplicar estilo a un párrafo. El archivo HTML incluye un enlace a una hoja de estilos externa (`estilos.css`).

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <p>Este es un párrafo estilizado con CSS.</p>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* Aplicamos color azul y tamaño de fuente 16px a todos los párrafos */
p {
  color: blue;
  font-size: 16px;
}
```

---

## 2. Herencia en CSS Externo

El color verde se hereda por todos los elementos dentro de un `div`.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <div>
    Este texto es verde.
    <p>Este párrafo también es verde debido a la herencia.</p>
  </div>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* El color verde se hereda por todos los elementos dentro del div */
div {
  color: green;
}
```

---

## 3. Especificidad en CSS Externo

El selector más específico sobrescribe a los menos específicos.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <p>Este es un párrafo azul.</p>
  <p class="important">Este es un párrafo rojo.</p>
  <p id="highlight">Este es un párrafo naranja.</p>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* El selector más específico sobrescribe al menos específico */
p { color: blue; } /* Menos específico */
.important { color: red; } /* Más específico */
#highlight { color: orange; } /* Aún más específico */
```

---

## 4. Selectores Descendientes y Hijos Directos en CSS Externo

Se usan selectores descendientes y de hijos directos para aplicar diferentes estilos.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <div>
    <p>Este párrafo es verde.</p>
    <section>
      <p>Este párrafo es púrpura.</p>
    </section>
  </div>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* El selector descendiente selecciona todos los párrafos dentro de un div */
div p {
  color: purple;
}

/* El selector de hijo directo selecciona solo los hijos directos */
div > p {
  color: green;
}
```

---

## 5. Selectores de Hermanos Adyacentes en CSS Externo

Aplica estilos solo al primer párrafo que sigue inmediatamente a un `h1`.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <h1>Título</h1>
  <p>Este párrafo es rojo.</p>
  <p>Este párrafo no es rojo.</p>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* Selecciona solo el primer párrafo que sigue inmediatamente a un h1 */
h1 + p {
  color: red;
}
```

---

## 6. Cascada y Orden de Aparición en CSS Externo

La última regla escrita sobrescribe las anteriores si tienen la misma especificidad.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <p>Este párrafo será rojo porque la última regla prevalece.</p>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* La última regla en la cascada sobrescribe a las anteriores */
p { color: blue; }
p { color: red; }
```

---

## 7. Propiedades No Heredables en CSS Externo

Algunas propiedades no se heredan a los hijos.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <div>
    Este es un `<div>` con un fondo amarillo.
    <p>El párrafo dentro del div no hereda el fondo amarillo.</p>
  </div>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* Aplicamos un fondo amarillo y padding al div, pero no se heredan a los hijos */
div {
  background-color: yellow;
  padding: 20px;
}
```

---

## 8. Uso de Propiedades Globales en CSS Externo

Uso de propiedades globales como `inherit`, `initial` y `unset`.

### Ejemplo HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
  <p>Este es un párrafo con propiedades globales.</p>
</body>
</html>
```

### Ejemplo de `estilos.css`:

```css
/* Hereda el color del elemento padre */
p {
  color: inherit;
}

/* Vuelve al valor inicial definido por CSS */
p {
  color: initial;
}

/* Restablece a su valor heredado o inicial */
p {
  color: unset;
}
```
