import React, { useState } from 'react';

function Celda({ value, onChange }) {
  return (
    <input type="number" value={value} onChange={onChange} />
  );
}

function Sudoku() {
  const [tablero, setTablero] = useState(Array(9).fill(Array(9).fill(null)));

  function handleChange(event, i, j) {
    const tableroCopia = [...tablero];
    tableroCopia[i][j] = event.target.value;
    setTablero(tableroCopia);
  }

  function renderCelda(i, j) {
    return (
      <Celda
        value={tablero[i][j]}
        onChange={(event) => handleChange(event, i, j)}
      />
    );
  }

  return (
    <div>
      {tablero.map((fila, i) => (
        <div key={i}>
          {fila.map((_, j) => renderCelda(i, j))}
        </div>
      ))}
    </div>
  );
}

export default Sudoku;