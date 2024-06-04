//Iteración #1: Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

products.forEach(product => {
    if (product.includes('Camiseta')) {
        console.log(product);
    }
});


//Iteración #2: Condicionales avanzadosconst alumns = [
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

alumns.forEach(alumn => {
    let approvedTrimesters = 0;

    if (alumn.T1) approvedTrimesters++;
    if (alumn.T2) approvedTrimesters++;
    if (alumn.T3) approvedTrimesters++;

    alumn.isApproved = approvedTrimesters >= 2;
});

console.log(alumns);


//Iteración #3: Probando For...of

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (let place of placesToTravel) {
    console.log(place);
}

//Iteración #4: Probando For...in

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (let key in alien) {
    console.log(`${key}: ${alien[key]}`);
}


//Iteración #5: Probando For

const placesToTravels = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

for (let i = 0; i < placesToTravels.length; i++) {
    if (placesToTravels[i].id === 11 || placesToTravels[i].id === 40) {
        placesToTravels.splice(i, 1);
        i--; 
    }
}

console.log(placesToTravel);


//Iteración #6: Mixed For...of e includes

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1);
        i--; 
    }
}

console.log(toys);

//Iteración #7: For...of avanzado

const popularToy = [];
const toy = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
];

for (let toys of toy) {
    if (toy.sellCount > 15) {
        popularToys.push(toys);
    }
}

console.log(popularToys);