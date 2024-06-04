import { HOBBIES } from "../../HOBBIES/HOBBIES"

export const Languages = () => {
    const {languages} = HOBBIES
  return (
    <div>
        <h1>LENGUAJES</h1>
        <p>{languages.language}</p>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
    </div>
  )
}