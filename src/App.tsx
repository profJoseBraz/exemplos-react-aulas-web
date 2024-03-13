import { useState } from 'react'
import MyInput from './assets/components/MyInput'
import MyButton from './assets/components/MyButton'

function App() {
  const [items, setItems] = useState([''])

  const handleOnClick = () => {
    setItems([...items, "item" + items.length])
  }

  return (
    <>
      <MyInput type='text' placeholder='Digite algo' bgColor='#f0f0f0'/>
      <MyButton onClick={handleOnClick}>adicionar</MyButton>

      {items.length > 0 && (
        <>
          {items.map((items, index) => (
            <p key={index}>{items}</p>
          ))}
        </>
      )}
    </>
  )
}

export default App
