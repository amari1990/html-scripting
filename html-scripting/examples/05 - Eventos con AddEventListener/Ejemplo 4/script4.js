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
