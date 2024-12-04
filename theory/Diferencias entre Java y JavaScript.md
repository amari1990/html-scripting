
# Diferencias clave entre Java y JavaScript

## Sintaxis y Declaración de Variables

### Java: Declaración con Tipado Fuerte
En Java, las variables deben declararse con un tipo específico y no pueden cambiar de tipo. Esto ayuda a detectar errores en tiempo de compilación.

```java
int numero = 10; // Declaración de un entero
String texto = "Hola"; // Declaración de una cadena
double decimal = 3.14; // Declaración de un número decimal

// Esto da error porque no se puede cambiar el tipo:
numero = "Texto"; // Error de compilación
```

### JavaScript: Declaración con Tipado Dinámico
En JavaScript, puedes declarar variables con `var`, `let` o `const`. No se requiere especificar el tipo, y este puede cambiar durante la ejecución.

```javascript
let numero = 10; // Declaración inicial como número
numero = "Texto"; // Ahora la variable contiene un string
const pi = 3.14; // Una constante que no puede cambiar
```

### Diferencias en los Alcances
- **Java:** Las variables declaradas dentro de un bloque `{}` solo son accesibles dentro de ese bloque.
- **JavaScript:** `let` y `const` también son de bloque, pero `var` tiene un alcance más amplio (función).

**Ejemplo:**
```java
public class Ejemplo {
    public static void main(String[] args) {
        if (true) {
            int numero = 5;
        }
        // System.out.println(numero); // Error: "numero" no está definido fuera del bloque
    }
}
```

```javascript
if (true) {
    let numero = 5;
}
// console.log(numero); // Error: "numero" no está definido
```

---

## Condicionales

### Java:
Java utiliza estructuras condicionales similares a otros lenguajes. Los bloques están delimitados por `{}` y los tipos de las condiciones son estrictos (solo `boolean`).

```java
int edad = 18;
if (edad >= 18) {
    System.out.println("Eres mayor de edad");
} else {
    System.out.println("Eres menor de edad");
}
```

### JavaScript:
JavaScript es más flexible con las condiciones. Cualquier valor puede evaluarse como "verdadero" o "falso" (por ejemplo, `0`, `null`, `undefined`, y cadenas vacías son falsos).

```javascript
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

### Diferencia clave: Comparadores
- Java tiene comparadores específicos (`==` para comparar valores, `equals` para objetos).
- JavaScript tiene dos tipos de igualdad:
  - **`==`**: Convierte tipos si son diferentes antes de comparar.
  - **`===`**: Estricta, no convierte tipos.

```javascript
console.log(5 == "5");  // true (porque convierte tipos)
console.log(5 === "5"); // false (porque compara tipos y valores)
```

---

## Bucles

### Java: Tipado y Sintaxis Rígida
Java permite bucles clásicos como `for`, `while` y `do-while`. Todo está estrictamente tipado.

**Bucle `for`:**
```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteración: " + i);
}
```

**Bucle `while`:**
```java
int i = 0;
while (i < 5) {
    System.out.println("Iteración: " + i);
    i++;
}
```

### JavaScript: Sintaxis Flexible
JavaScript tiene bucles similares, pero también incluye iteraciones modernas como `for...of` y `for...in` para recorrer objetos o arrays.

**Bucle clásico:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(\`Iteración: \${i}\`);
}
```

**Bucle moderno (recorriendo arrays):**
```javascript
let numeros = [10, 20, 30];
for (let numero of numeros) {
    console.log(numero); // Imprime cada elemento del array
}
```

---

## Arrays

### Java: Tipado Fijo
Los arrays en Java tienen un tamaño y tipo fijo desde el momento de su declaración.

```java
int[] numeros = {1, 2, 3, 4}; // Array de enteros
System.out.println(numeros[0]); // Accede al primer elemento

// Error si intentas cambiar el tipo:
numeros[0] = "Texto"; // Error de compilación
```

### JavaScript: Tipado Dinámico y Tamaño Variable
Los arrays en JavaScript pueden contener diferentes tipos y su tamaño es dinámico.

```javascript
let numeros = [1, 2, 3, 4];
console.log(numeros[0]); // Imprime el primer elemento

numeros[0] = "Texto"; // Cambia el tipo del elemento
numeros.push(5); // Agrega un nuevo elemento
```

---

## Matrices (Arrays Multidimensionales)

### Java: Arrays de Arrays
Las matrices en Java son arrays que contienen otros arrays. El tamaño de cada sub-array puede ser diferente.

```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5},
    {6, 7, 8, 9}
};
System.out.println(matriz[1][1]); // Imprime el segundo elemento del segundo sub-array
```

### JavaScript: Arrays Multidimensionales
JavaScript no tiene soporte nativo para matrices, pero puedes usar arrays dentro de otros arrays.

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
console.log(matriz[1][1]); // Imprime el segundo elemento del segundo sub-array
```

---

## Diferencias Resumidas
| **Aspecto**            | **Java**                          | **JavaScript**                   |
|-------------------------|-----------------------------------|-----------------------------------|
| **Variables**           | Tipado fuerte                    | Tipado dinámico                  |
| **Condicionales**       | Solo `boolean`                   | Cualquier valor evaluable        |
| **Comparadores**        | `==`, `equals`                   | `==`, `===`                      |
| **Bucles**              | `for`, `while`, `do-while`       | `for`, `while`, `for...of`, etc. |
| **Arrays**              | Tipo y tamaño fijo               | Dinámicos y de tipo variable     |
| **Matrices**            | Arrays de arrays                 | Arrays dentro de arrays          |
