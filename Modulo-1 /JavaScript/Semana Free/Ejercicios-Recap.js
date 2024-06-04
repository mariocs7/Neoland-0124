// EJERCICIO 1

for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }

// EJERCICIO 2

for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}

// EJERCICIO 3

let numerosAleatorios = [1, 2, 3, 5, 6, 7, 84, 46, 94, 72]

console.log("Numeros aleatorios en el array:", numerosAleatorios)

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log("Numero aleatorio fuera del Array:", numerosAleatorios[i])
}

// EJERCICIO 4

let    colores    =    ["azul", "verde", "rosa", "naranja", "rojo", "marron"]

let colorNumero3 = colores[3]
console.log(colorNumero3)

// EJERCICIO 5
let primerCaracter = colores[0][0]
console.log(primerCaracter)

// EJERCICIO 6
let frase = ["Las", "posiciones", "array", "se cuentan", "cero.", "a partire", "del", "cero."];
console.log(frase);

// EJERCICIO 7 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function unirArrays(arr1, arr2) {
    return arr1 + arr2;
}
let arrayUnido = unirArrays(array1, array2);
console.log(arrayUnido);

// EJERCICIO 8

let array8 = [1, 2, 3, 4];
let array9 = [5, 6, 7, 8];

function moveLastElement(arr8, arr9) {
    arr9.push(arr8.pop());
}

moveLastElement(array8, array9);

console.log(array8);
console.log(array9);

// EJERCICIO 9 A

let array5 = [1, 2, [3, 4]];
let array6 = [1, 2, [3, 4, [5, 6]]];

let flattenedArray1 = array5.flat(Infinity);
console.log(flattenedArray1);

// EJERCICIO 9 B

let array7 = [1, 2, [3, 4, [5, 6]]];

let newArray7 = [array7[0], array7[1], ...array7[2]];

console.log(newArray7);

// EJERCICIO 9 C

let array3 = [1, 2, [3, 4, [5, 6]]];

let newArray3 = array3.flat(Infinity);

console.log(newArray3);

// EJERCICIO 10 

let colores1 = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];

colores1 = colores1.sort().reverse();

console.log(colores1);


// EJERCICIO 11

let numeros = [40, 100, 1, 5, 25, 10];

numeros.sort((a, b) => a - b);

console.log(numeros);

// EJERCICIO 12 

function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(0, n);
}
let n = 10; 
let fibSeries = fibonacci(n);
console.log(fibSeries);

// EJERCICIO 13

function celsiusaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
celsius = 20;
let fahrenheit = celsiusaFahrenheit(celsius);
console.log(fahrenheit)


// EJERCICIO 14

let celsiusToFahrenheit = celsius1 => celsius1 * 9/5 + 32;
let celsius1 = 20;
let fahrenheit1 = celsiusToFahrenheit(celsius);
console.log(fahrenheit1);

// EJERCICIO 15

function verificarLetras(frase) {
    if (frase === frase.toUpperCase()) {
        console.log("La frase tiene todas sus letras en mayúsculas.");
    } else if (frase === frase.toLowerCase()) {
        console.log("La frase tiene todas sus letras en minúsculas.");
    } else {
        console.log("La frase tiene letras mayúsculas y minúsculas.");
    }
    console.log("Frase:", frase)};

verificarLetras("HOLA MUNDO"); 
verificarLetras("hola mundo"); 
verificarLetras("Hola Mundo"); 


// EJERCICIO 16

function comprobarPalindromo(frase) {
    let fraseInvertida = [];
    let fraseNormal = [];
    for(let i=0; i<frase.length; i++){
        if(frase[i].match(/[A-Za-z]/)){
            fraseNormal.push(frase[i].toLowerCase());
            fraseInvertida.unshift(frase[i].toLowerCase());
        }
    }
    fraseNormal = fraseNormal.join("");
    fraseInvertida = fraseInvertida.join("");
    if (fraseNormal == fraseInvertida) {
        return "La frase ES un palíndromo"
    } else {
        return "La frase NO es un palíndromo"
    }
}
console.log(comprobarPalindromo("Dabale arroz a la zorra el abad"));
console.log(comprobarPalindromo("el abad no le da nada a la zorra"));

// Ejercicio 17

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
let diasM = [];
diasM = dias.filter((dia) => dia[0] == "m");
console.log(diasM);

// Ejercicio 18

let	num = [100, 2, 20, 35, 4, 44];
num = num.sort((a,b) => a-b).filter((numero) => numero < 10);
console.log(num);

// Ejercicio 19

let	nums = [100, 2, 20, 35, 4, 44];
let	numSuma = nums.reduce((suma, num) => suma + num);
console.log(numSuma);

// Ejercicio 20

let letras1 = ["a","b","c","d","e"];
let letras2 = ["d","e","f","g","h"];
function juntarArraysSinDuplicados(array1,array2) {
    let arrayJuntos = [];
    for(let i = 0; i<array1.length; i++){
        if(!array2.includes(array1[i])){
            arrayJuntos.push(array1[i]);
        }
    }
    for(let i = 0; i<array2.length; i++){
        if(!array1.includes(array2[i])){
            arrayJuntos.push(array2[i]);
        }
    }
    return arrayJuntos;
}
console.log(juntarArraysSinDuplicados(letras1,letras2));


let juntarSinDuplicados = (array1,array2) => array1.concat(array2).filter(el => !array1.includes(el) || !array2.includes(el));
console.log(juntarSinDuplicados(letras1,letras2));

// Ejercicio 21

let fruta = {};
fruta.tipo = "cítrica";
fruta.color = "amarillo";
fruta.peso = 0.2;
console.log(fruta);

// Ejercicio 22

let	jugadores = [	
    {nombre: "Ana", puntos: [21,3,5,78,25], temporada: false}, 	
    {nombre: "Pedro", puntos: [55,66,77,55,66], temporada: true}, 
    {nombre: "Juan", puntos: [12,83,40,65,10], temporada: true},
    {nombre: "Marta", puntos: [24,90,36,78,20], temporada: true}
];

function mejorJugador(lista) {
    let puntuacionMedia = 0;
    let mayorPuntuacion = 0;
    let mejorJugador = {};
    for(let i = 0; i<lista.length; i++){
        puntuacionMedia = 0;
        for(let j = 0; j<lista[i].puntos.length; j++){
            puntuacionMedia+=lista[i].puntos[j];
        }
        puntuacionMedia/=lista[i].puntos.length;
        if (puntuacionMedia>mayorPuntuacion) {
            mayorPuntuacion = puntuacionMedia;
            mejorJugador = lista[i];
        }
    }
    return `${mejorJugador.nombre} es el MVP con ${mayorPuntuacion.toFixed(2)} puntos de media ${mejorJugador.temporada ? "y SI está inscrito en la siguiente temporada" : "y NO está en la siguiente temporada"}`;
}
console.log(mejorJugador(jugadores));

// Ejercicio 23

let estudiante = {Bea: 5, Sebas: 9, Laura: 5, Elena: 8, Liviu: 6, Raul: 4, Angel: 2};
function calcularMedia(estudiantes) {
    let sumaNotas = 0;
    let media;
    let resultadoAlumnos = {};
    for(let estudiante in estudiantes){
        sumaNotas += estudiantes[estudiante];
    }
    media = sumaNotas/Object.keys(estudiantes).length;
    media *= 1.1;
    media = Math.floor(media);
    console.log(media);
    for(let estudiante in estudiantes){
        if (estudiantes[estudiante] >= 5) {
            resultadoAlumnos[estudiante] = `Aprobado con un ${estudiantes[estudiante]*media/10} sobre ${media}`
        } else {
            resultadoAlumnos[estudiante] = `Suspenso con un ${estudiantes[estudiante]*media/10} sobre ${media}`
        }
    }
    return resultadoAlumnos;
}
console.log(calcularMedia(estudiante));

// Ejercicio 24

const trabajadores = {	
    Pedro: {	
        puesto: 'empleado',	
        edad: 40	
    },	
    Ana: {	
        puesto: 'becario',	
        edad: 34	
    },	
    Mike: {	
        puesto: 'becario',	
        edad: 37	
    },	
    Oscar: {	
        puesto: 'empleado',	
        edad: 35	
    },	
    Juan: {	
        puesto: 'becario',	
        edad: 29	
    },	
    Marta: {	
        puesto: 'jefe',	
        edad: 26	
    },	
    Maria: {	
        puesto: 'empleado',	
        edad: 28	
    },	
    Pablo: {	
        puesto: 'jefe',	
        edad: 36	
    },	
};

function ordenarTrabajadores(trabajadores) {
    let jefes = 0, empleados = 0, becarios = 0;
    let trabajadoresOrdenado = [], ordenandoJ = [], ordenandoE = [], ordenandoB = [];
    for(let trabajador in trabajadores){
        if(trabajadores[trabajador].puesto == 'jefe'){
            trabajadores[trabajador].nombre = trabajador;
            trabajadoresOrdenado.unshift(trabajadores[trabajador]);
            jefes++;
        }
        else if (trabajadores[trabajador].puesto == 'becario'){
            trabajadores[trabajador].nombre = trabajador;
            trabajadoresOrdenado.push(trabajadores[trabajador]);
            becarios++;
        }
        else{
            trabajadores[trabajador].nombre = trabajador;
            trabajadoresOrdenado.splice(jefes,0,trabajadores[trabajador]);
            empleados++;
        }
    }
    ordenandoJ = trabajadoresOrdenado.splice(0,jefes).sort(function (a,b) {
        a = a.edad;
        b = b.edad;
        return a-b;
    });
    ordenandoE = trabajadoresOrdenado.splice(0,empleados).sort(function (a,b) {
        a = a.edad;
        b = b.edad;
        return a-b;
    });;
    ordenandoB = trabajadoresOrdenado.splice(0,becarios).sort(function (a,b) {
        a = a.edad;
        b = b.edad;
        return a-b;
    });;
    trabajadoresOrdenado = [...ordenandoJ, ...ordenandoE, ...ordenandoB];
    return trabajadoresOrdenado;
}
console.log(ordenarTrabajadores(trabajadores));

