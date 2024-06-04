import { HOBBIES } from "../../HOBBIES/HOBBIES"

export const Movies = () => {
    const {movies} = HOBBIES
  return (
    <div>
        <h1>PELÍCULAS VISTAS</h1>
        <ul>
            {movies.map((item, index) => (
            <li key={index}>
                <p>name:{item.name}</p>
                <p>type:{item.type}</p>
                <p>genre:{item.genre}</p>
                <p>vote:{item.vote}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}