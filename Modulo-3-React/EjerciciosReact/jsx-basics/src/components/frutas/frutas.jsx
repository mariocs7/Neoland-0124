import './frutas.css'

export const Fruta = () => {
    const items = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Kiwi']
    
    return (
      <div className="Fruta">
        <h1> Lista de frutas</h1>
        <ul>
          {items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
    )
  }

