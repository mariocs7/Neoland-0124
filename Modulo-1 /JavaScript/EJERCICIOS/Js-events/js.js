//Iteración #1: Creando Events


// 1.1 Añade un evento click al botón con id 'btnToClick'
document.getElementById('btnToClick').addEventListener('click', function(event) {
    console.log(event);
});

// 1.2 Añade un evento 'focus' al input con clase 'focus'
document.querySelector('.focus').addEventListener('focus', function(event) {
    console.log(event.target.value);
});

// 1.3 Añade un evento 'input' al input con clase 'value'
document.querySelector('.value').addEventListener('input', function(event) {
    console.log(event.target.value);
});