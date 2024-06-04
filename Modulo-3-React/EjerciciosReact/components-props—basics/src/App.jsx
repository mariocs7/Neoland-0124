
import { Title } from './Components/Title/Title'
import './App.css'
import { Subtitle } from './Components/Subtitle/Subtitle'
import { Image } from './Components/Image/Image'
import { Paragraph } from './Components/Paragraph/Paragraph'
import { Blog } from './Blog/Blog'

function App() {
  return (
    <>
     < Title text = "Welcome to Components ReactJS" />
     < Subtitle subtext = "This is a subtitle" />
     < Image src = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/d0f4/live/ba6845d0-db4b-11ee-9c01-d7b46c02c6bc.jpg"
             alt = "Bitcoin"
             width = {300}  
             height = {200}
      />
     < Paragraph Parrafo = "Esto es un B...."  />
     < Blog />
    </>
  )
}

export default App
