import { HOBBIES } from "../../HOBBIES/HOBBIES"

export const SongsHeard = () => {
    const {songsHeard} = HOBBIES
  return (
    <div>
        <h1>CANCIONES ESCUCHADAS</h1>
        <ul>
            {songsHeard.map((item, index) => (
            <li key={index}>
                {item}
            </li>
            ))}
        </ul>
    </div>
  )
}

