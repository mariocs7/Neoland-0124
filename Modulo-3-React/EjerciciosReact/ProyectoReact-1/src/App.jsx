import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <div className={styles.characterContainer}>
      {characterList.map((character) => (
        // Verifica si el personaje está vivo antes de renderizarlo
        character.status === 'Alive' && (
          <div key={character.id} className={styles.character}>
            <h2>Name: {character.name}</h2>
            <p>ID: {character.id}</p>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            {character.status === 'Alive' ? (
              <p>{character.name} is alive!</p>
            ) : (
              <p>{character.name} is not alive.</p>
            )}
          </div>
        )
      ))}
    </div>
  );
};

export default App;