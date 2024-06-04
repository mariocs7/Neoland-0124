import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Image } from './Components/Image/Image'
import { Main } from './Components/Main/Main'
import { Paragraph } from './Components/Paragraph/Paragraph'
import { Subtitle } from './Components/Subtitle/Subtitle'
import { Title } from './Components/Title/Title'

function App() {

  return (
    <>
    <Header>
      <Title text = "My App" />
    </Header>
    <Main>
      <Subtitle subtext = "Esta es mi subApp" />
    </Main>
    <Footer> 
      <Image src = "https://www.newsbtc.com/wp-content/uploads/2024/03/Shiba-Inu-3.jpeg?fit=286%2C176"
              alt = "Shiba Inu"
              width = {400}
              height = {300}
      />
      <Paragraph Parrafo = "Shiba Inu is a Japanese breed of dog that was popularized as an online meme and later became a cryptocurrency." />
    </Footer>
    </>
  )
}

export default App
