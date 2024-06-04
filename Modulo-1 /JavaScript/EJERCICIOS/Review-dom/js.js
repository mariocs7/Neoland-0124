// 1.1 Crear una lista ul > li dinámicamente en el html que imprima cada uno de los países.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul = document.createElement('ul');
countries.forEach(country => {
    let li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.2 Eliminar el elemento que tenga la clase .fn-remove-me.
let elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.parentNode.removeChild(elementToRemove);

// 1.3 Crear dinámicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let div = document.querySelector('[data-function="printHere"]');
ul = document.createElement('ul');
cars.forEach(car => {
    let li = document.createElement('li');
    li.textContent = car;
    ul.appendChild(li);
});
div.appendChild(ul);

// 1.4 Crear dinámicamente en el html una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen.
const countrie = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
countrie.forEach(country => {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.textContent = country.title;
    let img = document.createElement('img');
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
});

// 1.5 Crear un botón que elimine el último elemento de la serie de divs.
let button = document.createElement('button');
button.textContent = 'Eliminar último div';
button.addEventListener('click', () => {
    let divs = document.querySelectorAll('div');
    divs[divs.length - 1].remove();
});
document.body.appendChild(button);

// 1.6 Crear un botón para cada uno de los divs que elimine ese mismo elemento del html.
document.querySelectorAll('div').forEach(div => {
    let button = document.createElement('button');
    button.textContent = 'Eliminar este div';
    button.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(button);
});