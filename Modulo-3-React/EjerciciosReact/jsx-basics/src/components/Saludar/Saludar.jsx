import './Saludar.css';

export const Saludar = () => {
    const data = new Date()
    const hours = data.getHours()
    let saludo = '';
  
    if (hours >= 6 && hours < 12) {
      saludo = 'Buenos días';
    } else if (hours >= 13 && hours < 19) {
      saludo = 'Buenas tardes';
    } else if (hours >= 20 && hours < 5) {
      saludo = 'Buenas noches';
    }
  
    return (
      <div>
        <h1>{saludo}</h1>
      </div>
    )
  }