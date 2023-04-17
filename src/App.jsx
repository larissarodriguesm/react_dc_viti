import { useState } from 'react'
import './App.css'
import {InputText} from './components/InputText'
import { MyTitle } from './components/MyTitle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <h1>'Olá! Meu nome é Larissa'</h1> */}
      < MyTitle title = 'Novo título' />

      <InputText 
        id='nome' 
        name='nome'
        placeholder='nome'
      />
      <br/>
      <InputText 
        id='sobrenome'
        name='sobrenome'
        placeholder='sobrenome'
      />
    </>
  )
}

export default App
