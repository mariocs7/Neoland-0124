import { HOBBIES } from "../../HOBBIES/HOBBIES"

export const Read = () => {
    const {read} = HOBBIES
  return (
    <div>
        <h1>LIBROS LEIDOS</h1>
        <h2>{read.title}</h2>
        <p>{read.authorName}</p>
        <p>{read.authorSurname}</p>
        <p>{read.genre}</p>
        <p>{read.dateOfPublication}</p>
        <p>{read.authorBirthDate}</p>
        <img src= {read.bookImage} alt = "Shiba Inu" />
        <ul>
            {read.otherBooks.map((item, index) => (
            <li key={index}>
                <p>title:{item.info}</p>

            </li>
            ))}
        </ul>
    </div>
  )
}
