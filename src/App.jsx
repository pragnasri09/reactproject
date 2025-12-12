import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './colorbox'
function App() {
  const [color, setColor] = useState('#ff0000')

  return (
    <>
      <h1>Simple Color Picker</h1>
      <input type='color' value={color} onChange={(e)=>setColor(e.target.value)}
      
      ></input>
      <ColorBox color={color}/>
    </>
  )
}

export default App;