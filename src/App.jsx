import { useState } from 'react'
import './App.css'
import ButtonClick from './ButtonClick'
import KeyEvent from './KeyEvent'
import Debounce from './Debounce'
import ButtonClickExercise from './ButtonClickExercise'
import KeyPressEvent from './KeyPressEvent'
import AllEvents from './AllEvents'
import HoverBox from './HoverBox'



function App() {
  

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonClick />
      <KeyEvent />
      <Debounce />
      <ButtonClickExercise />
      <KeyPressEvent/>
      <AllEvents/>
      <HoverBox/>
     
    </div>
  )
}

export default App
