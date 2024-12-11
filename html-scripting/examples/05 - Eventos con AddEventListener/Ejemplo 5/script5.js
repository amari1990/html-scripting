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
