import { useState } from 'react';
import './Button.css'  
  
 export const Button = () => {
    const [valor, setValor] = useState(false);
  
    const toggleValor = () => {
      setValor(!valor); 
    };
  
    return (
      <div>
        <button onClick={toggleValor}>Cambiar Valor</button>
        <p>{valor ? 'Verdadero' : 'Falso'}</p>
      </div>
    );
  }
