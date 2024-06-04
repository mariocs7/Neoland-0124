// Iteración #1: Arrows
const sum = (a = 10, b = 5) => console.log(a + b);
// 1.1 
sum();
// 1.2
sum(20);
// 1.3
sum(20, 30); 

// Iteración #2: Destructuring
// 2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const {title, gender, year} = game; 
console.log(title, gender, year);

// 2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits; 
console.log(fruit1, fruit2, fruit3);

// 2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name, race} = animalFunction(); 
console.log(name, race);

// 2.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const {name: carName, itv} = car; 
const [year1, year2, year3] = itv;
console.log(carName, itv, year1, year2, year3);

// Iteración #3: Spread Operator
// 3.1
const pointsList = [32, 54, 21, 64, 75, 43];
const copyPointsList = [...pointsList]; 

// 3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy}; 

// 3.3
const pointsList2 = [54,87,99,65,32];
const pointsList3 = [...pointsList, ...pointsList2]; 

// 3.4
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const updatedToy = {...toy, ...toyUpdate}; 

// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors.slice(0, 2), ...colors.slice(3)]; 

// Iteración #4: Map
// 4.1
const users = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
];
const names = users.map(user => user.name); 

// 4.2
const names2 = users.map(user => user.name.startsWith('A') ? 'Anacleto' : user.name); 

// 4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];
const cityNames = cities.map(city => city.isVisited ? city.name + ' (Visitado)' : city.name);

// Iteración #5: Filter
// 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages.filter(age => age > 18);

// 5.2
const evenAges = ages.filter(age => age % 2 === 0);

// 5.3
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

// 5.4
const uStreamers = streamers.filter(streamer => streamer.name.includes('u'));

// 5.5
const legendsStreamers = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends')).map(streamer => {
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return streamer;
});

// 5.6
document.querySelector('[data-function="toFilterStreamers"]').addEventListener('input', function(e) {
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(e.target.value));
    console.log(filteredStreamers);
});

// 5.7
document.querySelector('[data-function="toShowFilterStreamers"]').addEventListener('click', function() {
    const input = document.querySelector('[data-function="toFilterStreamers"]');
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(input.value));
    console.log(filteredStreamers);
});

//Iteración #6: Find
// 6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];
const foundNumber = numbers.find(number => number === 100);

// 6.2
const movies = [
    {title: 'Madagascar', stars: 4.5, date: 2015},
    {title: 'Origen', stars: 5, date: 2010},
    {title: 'Your Name', stars: 5, date: 2016}
];
const movie2010 = movies.find(movie => movie.date === 2010);

// 6.3
const aliens = [
    {name: 'Zalamero', planet: 'Eden', age: 4029},
    {name: 'Paktu', planet: 'Andromeda', age: 32},
    {name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
    {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
    {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
    {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const alien = aliens.find(alien => alien.name === 'Cucushumushu');
const mutation = mutations.find(mutation => mutation.name === 'Porompompero');
const merged = {...alien, mutation: {...mutation}};

//Iteración #7: Reduce
// 7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const totalScore = exams.reduce((total, exam) => total + exam.score, 0);

// 7.2
const passedExams = exams.filter(exam => exam.score >= 5);
const totalPassedScore = passedExams.reduce((total, exam) => total + exam.score, 0);

// 7.3
const averageScore = totalScore / exams.length;