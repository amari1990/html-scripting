const boton = document.getElementById('contador');
let contador = 0;

boton.addEventListener('click', () => {
    contador++;
    boton.textContent = `Clics: ${contador}`;
});
