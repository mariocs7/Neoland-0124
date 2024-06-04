import { HOBBIES } from "../../HOBBIES/HOBBIES"

export const Sports = () => {
    const {sports} = HOBBIES
  return (
    <div>
        <h1>DEPORTES</h1>
        <h2>{sports.title}</h2>
        <p>{sports.description}</p>
        <ul>
            {sports.map((item, index) => (
            <li key={index}>
                <p>name:{item.name}</p>
                <p>indoor:{item.indoor? "True" : "False"}</p>
                <p>favoriteTeam:{item.favoriteTeam}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

