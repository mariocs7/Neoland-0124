// Iteración #1: Interacción con el DOM

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector('.showme'));

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector('#pillado'));

// 1.3 Usa querySelector para mostrar por consola todos los p
console.log(document.querySelectorAll('p'));

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
console.log(document.querySelectorAll('.pokemon'));

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]'));

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);


// Iteración #2: Modificando el DOM

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
document.body.appendChild(document.createElement('div'));

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divWithP = document.createElement('div');
divWithP.appendChild(document.createElement('p'));
document.body.appendChild(divWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divWith6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
    divWith6P.appendChild(document.createElement('p'));
}
document.body.appendChild(divWith6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement('ul');
apps.forEach(app => {
    let li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach(node => node.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
let pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
document.body.insertBefore(pMiddle, document.body.children[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll('.fn-insert-here').forEach(div => {
    let pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!';
    div.appendChild(pInside);
});