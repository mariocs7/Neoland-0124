import { useState } from 'react'
import './App.css'
import { ItemList } from './components/ItemList/ItemList'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'


function App() {
  return (
    <>
    <Header>
    <ItemList items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} />
    <Paragraph Parrafo="This is a paragraph" />
    </Header>
    <Main>
    <ItemList items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} />
    <Paragraph Parrafo="This is a paragraph" />
    </Main>
    
    
    </>
  )
}

export default App
