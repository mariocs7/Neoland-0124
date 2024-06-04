import React, { useState } from 'react';

function Casilla({ value, onClick }) {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  );
}

function Juego() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [esXTurno, setEsXTurno] = useState(true);

  function handleClick(i) {
    const tableroCopia = [...tablero];
    if (calcularGanador(tableroCopia) || tableroCopia[i]) {
      return;
    }
    tableroCopia[i] = esXTurno ? 'X' : 'O';
    setTablero(tableroCopia);
    setEsXTurno(!esXTurno);
  }

  function renderCasilla(i) {
    return (
      <Casilla
        value={tablero[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const ganador = calcularGanador(tablero);
  let estado;
  if (ganador) {
    estado = 'Ganador: ' + ganador;
  } else {
    estado = 'Siguiente jugador: ' + (esXTurno ? 'X' : 'O');
  }

  return (
    <div>
      <div>{estado}</div>
      <div>
        {renderCasilla(0)}
        {renderCasilla(1)}
        {renderCasilla(2)}
      </div>
      <div>
        {renderCasilla(3)}
        {renderCasilla(4)}
        {renderCasilla(5)}
      </div>
      <div>
        {renderCasilla(6)}
        {renderCasilla(7)}
        {renderCasilla(8)}
      </div>
    </div>
  );
}

function calcularGanador(tablero) {
  const lineas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lineas.length; i++) {
    const [a, b, c] = lineas[i];
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return tablero[a];
    }
  }
  return null;
}

export default Juego;