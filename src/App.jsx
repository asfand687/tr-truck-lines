import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './sections/HomeHero'
import HomeServices from './sections/HomeServices'
import NumberAndFigures from './sections/NumberAndFigures'
import HomeLocationSection from './sections/HomeLocationSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <HomeServices/>
      <NumberAndFigures/>
      <HomeLocationSection/>
      <Footer/>
    </div>
  )
}

export default App
