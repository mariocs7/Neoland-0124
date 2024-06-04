//Iteración #1: Fetch
// 1.1
fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(data => console.log(data));

// 1.2
document.querySelector('button').addEventListener('click', function() {
    const name = document.querySelector('input').value;
    fetch(`${baseUrl}?name=${name}`)
        .then(response => response.json())
        .then(data => console.log(data));
});

// 1.3
document.querySelector('button').addEventListener('click', function() {
    const name = document.querySelector('input').value;
    fetch(`${baseUrl}?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const p = document.createElement('p');
            p.textContent = `El nombre ${data.name} tiene un ${data.probability} porciento de ser de ${data.country_id}`;
            document.body.appendChild(p);
        });
});

// 1.4
document.querySelector('button').addEventListener('click', function() {
    const name = document.querySelector('input').value;
    fetch(`${baseUrl}?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const p = document.createElement('p');
            const button = document.createElement('button');
            button.textContent = 'X';
            button.addEventListener('click', function() {
                p.remove();
            });
            p.textContent = `El nombre ${data.name} tiene un ${data.probability} porciento de ser de ${data.country_id}`;
            p.appendChild(button);
            document.body.appendChild(p);
        });
});

//Iteración #2: async-await
// 2.1
const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    await promise;
    console.log('Time out!')
};

runTimeOut();

// 2.2
async function getCharacters () {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await response.json();
    console.log(characters);
}

getCharacters();