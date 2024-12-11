const div = document.getElementById('miDiv');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'lightgray';
});
