//Iteración #1: Mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let categories = [];

for (let movie of movies) {
    for (let category of movie.categories) {
        if (!categories.includes(category)) {
            categories.push(category);
        }
    }
}

console.log(categories);

//Iteración #2: Mix Fors

const users = [
    {name: 'Manolo el del bombo', favoritesSounds: {waves: {format: 'mp3', volume: 50}, rain: {format: 'ogg', volume: 60}, firecamp: {format: 'mp3', volume: 80}}},
    {name: 'Mortadelo', favoritesSounds: {waves: {format: 'mp3', volume: 30}, shower: {format: 'ogg', volume: 55}, train: {format: 'mp3', volume: 60}}},
    {name: 'Super Lopez', favoritesSounds: {shower: {format: 'mp3', volume: 50}, train: {format: 'ogg', volume: 60}, firecamp: {format: 'mp3', volume: 80}}},
    {name: 'El culebra', favoritesSounds: {waves: {format: 'mp3', volume: 67}, wind: {format: 'ogg', volume: 35}, firecamp: {format: 'mp3', volume: 60}}},
];

let totalVolume = 0;
let count = 0;

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        totalVolume += user.favoritesSounds[sound].volume;
        count++;
    }
}

let averageVolume = totalVolume / count;

console.log(averageVolume);

//Iteración #3: Mix Fors

let soundCount = {};

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        if (soundCount[sound]) {
            soundCount[sound]++;
        } else {
            soundCount[sound] = 1;
        }
    }
}

console.log(soundCount);

//Iteración #4: Métodos findArrayIndex

function findArrayIndex(array, text) {
    return array.indexOf(text);
}

console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'));

//Iteración #5: Función rollDice

function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));

//Iteración #6: Función swap

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 1, 3));