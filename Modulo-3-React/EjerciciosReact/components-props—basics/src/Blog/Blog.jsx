
import { Title } from '../Components/Title/Title'
import { Subtitle } from '../Components/Subtitle/Subtitle'
import { Image } from '../Components/Image/Image'

export const Blog = () => {
  return (
    <div>
        <Title text = "Blog Title" />
        <Subtitle subtext = "Blog Subtitle" />
        <Image 
        src = "https://img.capital.com/imgs/articles/800x600x1/Ethereum-price-prediction_4.jpg" 
        alt = "Ehtereum"
        width = {300}
        height = {200}  
        />
    </div>
  )
}
