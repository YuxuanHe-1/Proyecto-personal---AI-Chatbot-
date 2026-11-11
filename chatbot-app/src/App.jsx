import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='prompt-container'>
      <textarea className='prompt' placeholder='ask anything'></textarea>
      <button className='submit-prompt'>
        ↑
      </button>
    </div>
  )
}

export default App
