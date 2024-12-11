
# Mini Manual de Manipulación de Strings en JavaScript

## ¿Qué es un String?
Un **string** en JavaScript es una cadena de caracteres utilizada para representar texto. Puede definirse usando comillas simples `'`, dobles `"` o backticks `` ` ``.

Ejemplo:
```javascript
let saludo = 'Hola';
let despedida = "Adiós";
let interpolacion = `Hola, ${nombre}`;
```

---

## Propiedades de los Strings

### **1. `length`**
Devuelve la longitud del string (número de caracteres).

Ejemplo:
```javascript
let texto = 'JavaScript';
console.log(texto.length); // Salida: 10
```

---

## Métodos Comunes de Strings

### **1. `toUpperCase()` y `toLowerCase()`**
Convierte el texto a mayúsculas o minúsculas.

Ejemplo:
```javascript
let texto = 'Hola Mundo';
console.log(texto.toUpperCase()); // Salida: HOLA MUNDO
console.log(texto.toLowerCase()); // Salida: hola mundo
```

### **2. `charAt()`**
Devuelve el carácter en una posición específica.

Ejemplo:
```javascript
let texto = 'JavaScript';
console.log(texto.charAt(0)); // Salida: J
console.log(texto.charAt(4)); // Salida: S
```

### **3. `includes()`**
Verifica si un string contiene una subcadena. Devuelve `true` o `false`.

Ejemplo:
```javascript
let texto = 'Aprendiendo JavaScript';
console.log(texto.includes('JavaScript')); // Salida: true
console.log(texto.includes('Python')); // Salida: false
```

### **4. `indexOf()` y `lastIndexOf()`**
Devuelven la posición de la primera y última aparición de una subcadena.

Ejemplo:
```javascript
let texto = 'JavaScript es genial, JavaScript es divertido';
console.log(texto.indexOf('JavaScript')); // Salida: 0
console.log(texto.lastIndexOf('JavaScript')); // Salida: 22
```

### **5. `slice()`**
Extrae una parte del string y devuelve una nueva cadena.

Ejemplo:
```javascript
let texto = 'JavaScript';
console.log(texto.slice(0, 4)); // Salida: Java
console.log(texto.slice(4)); // Salida: Script
```

### **6. `substring()`**
Similar a `slice()`, pero no acepta índices negativos.

Ejemplo:
```javascript
let texto = 'JavaScript';
console.log(texto.substring(0, 4)); // Salida: Java
console.log(texto.substring(4)); // Salida: Script
```

### **7. `replace()`**
Reemplaza la primera coincidencia de una subcadena.

Ejemplo:
```javascript
let texto = 'Hola Mundo';
console.log(texto.replace('Mundo', 'JavaScript')); // Salida: Hola JavaScript
```

### **8. `split()`**
Divide un string en un array de subcadenas usando un separador.

Ejemplo:
```javascript
let texto = 'rojo,azul,verde';
console.log(texto.split(',')); // Salida: ['rojo', 'azul', 'verde']
```

### **9. `trim()`**
Elimina los espacios en blanco al inicio y al final del string.

Ejemplo:
```javascript
let texto = '   Hola Mundo   ';
console.log(texto.trim()); // Salida: 'Hola Mundo'
```

### **10. `repeat()`**
Repite el string un número especificado de veces.

Ejemplo:
```javascript
let texto = 'Hola';
console.log(texto.repeat(3)); // Salida: HolaHolaHola
```

---

## Métodos Avanzados

### **1. `match()`**
Devuelve las coincidencias de una expresión regular.

Ejemplo:
```javascript
let texto = 'El 123 es un número';
console.log(texto.match(/\d+/g)); // Salida: ['123']
```

### **2. `startsWith()` y `endsWith()`**
Verifica si un string comienza o termina con una subcadena.

Ejemplo:
```javascript
let texto = 'JavaScript es genial';
console.log(texto.startsWith('JavaScript')); // Salida: true
console.log(texto.endsWith('genial')); // Salida: true
```

---

## Ejemplo Práctico
### Crear una función que invierta un string:
```javascript
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

console.log(invertirTexto('JavaScript')); // Salida: tpircSavaJ
```

### Validar si un string es un palíndromo:
```javascript
function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

console.log(esPalindromo('Anita lava la tina')); // Salida: true
console.log(esPalindromo('Hola Mundo')); // Salida: false
```

---

Este mini manual cubre las funciones más comunes y útiles para trabajar con strings en JavaScript. ¡Prueba estos ejemplos y practica modificándolos!
