import { useState } from 'react'
import MyInput from './assets/components/MyInput'
import MyButton from './assets/components/MyButton'
import './App.css'

function App() {
  const [items, setItems] = useState([''])

  const handleOnClick = () => {
    setItems([...items, "item " + items.length])
  }

  return (
    <>
      <div className='form-container'>
        <MyInput type='text' placeholder='Digite algo' bgColor='#f0f0f0'/>
        <MyButton onClick={handleOnClick} height='50px'>adicionar</MyButton>
      </div>
      
      <div className='items-container'>
      {items.length > 0 && (
        <div className='items'>
          {items.map((items, index) => (
            <h1 key={index}>{items}</h1>
          ))}
        </div>
      )}
      </div>

      <div className='footer'>
        
      </div>
    </>
  )
}

export default App
