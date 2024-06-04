//1
let myFavoriteHero = "Hulk"
let x = 50
let h = 5 
let y = 10
let z = h + y



//2.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

//2.2
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

//2.3
    const toy1 = {name: 'Buss myYear', price: 19};
    const toy2 = {name: 'Rallo mcKing', price: 29};
    const sumaPrecios = toy1.price + toy2.price;
    console.log('La suma del precio de ambos juguetes es: ' + sumaPrecios);


//2.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
    globalBasePrice = 25000;
    car1.finalPrice = car1.basePrice + globalBasePrice;
    car2.finalPrice = car2.basePrice + globalBasePrice;
    

//3.1
console.log(10*5); 
//3.2
console.log(10/2); 
//3.3
console.log(15%9);
//3.4
let p = 10;
let j = 5;
let o = p + j;
//3.5
let c = 10
let m = 5
let i = c * m;

//4.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//4.2
avengers[0] = "IRON MAN";
//4.3
console.log(avengers.lenght)
//4.4
const richAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(richAndMortyCharacters[rickAndMortyCharacters.length - 1]);
//4.5
rickAndMortyCharacters.pop
console.log(richAndMortyCharacters[0]);
console.log(richAndMortyCharacters[richAndMortyCharacters.length -1]);
//4.6
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters); 
//5.1
const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//6.1
for (i = 0; i < 10; i++) {
console.log(i);
}
//6.2
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
//6.3
for (let vuelta = 1; vuelta <= 10; vuelta++) {
    if (vuelta < 10) {
      console.log('Intentando dormir 🐑');
    } else {
      console.log('Dormido!');
    }
  }