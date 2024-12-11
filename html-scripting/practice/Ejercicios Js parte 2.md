
# Ejercicios de JavaScript

## **Ejercicio 1: Temporizador con cuenta regresiva**
Crea una página web que permita al usuario iniciar una cuenta regresiva desde un número dado en segundos. Cuando llegue a 0, debe mostrar un mensaje de "¡Tiempo agotado!"

### Requisitos:
1. Un campo de entrada donde el usuario ingrese los segundos.
2. Un botón para iniciar la cuenta regresiva.
3. Muestra el tiempo restante en pantalla, actualizándose cada segundo.
4. Cuando la cuenta regresiva termina, desactiva el botón hasta que el usuario ingrese un nuevo tiempo.

### Pistas para resolver el ejercicio:

1. Usa document.getElementById para seleccionar los elementos del HTML (el botón, el campo de texto y el párrafo donde se mostrará el tiempo).
2. Convierte el valor ingresado por el usuario en el campo de texto a un número con parseInt antes de usarlo.
3. Usa setInterval para ejecutar una función repetidamente cada segundo (1000 milisegundos).
4. Dentro del intervalo, reduce el tiempo en 1 (time--) y actualiza el contenido del párrafo con el tiempo restante.
5. Usa clearInterval para detener el temporizador cuando el tiempo llegue a 0.

---

## **Ejercicio 2: Calculador de propinas**
Desarrolla una aplicación web que ayude a calcular propinas para una cuenta en un restaurante.

### Requisitos:
1. Un campo de entrada para ingresar el monto total de la cuenta.
2. Un campo de selección para elegir el porcentaje de propina (10%, 15%, 20%).
3. Un botón para calcular la propina y el total final.
4. Muestra la propina calculada y el monto total a pagar en pantalla.

---

## **Ejercicio 3: Generador de contraseñas aleatorias**
Crea una página que genere contraseñas aleatorias según las preferencias del usuario.

### Requisitos:
1. Un formulario con las siguientes opciones:
   - Longitud de la contraseña (campo de número).
   - Inclusión de mayúsculas, minúsculas, números y símbolos (checkbox).
2. Un botón que genere y muestre la contraseña en pantalla.
3. Una función que valide que se seleccionen al menos uno de los tipos de caracteres.
