import { useState } from 'react'
import { AccordionItem } from './components/AccordionItem'
import './App.css'

function App() {
  return (
    <>
      <AccordionItem num='01' title="Where are these"/>
      <AccordionItem num='02' title="Who old are you"/>
      <AccordionItem num='03' title="good item for proof"/>
    </>
  )
}

export default App
