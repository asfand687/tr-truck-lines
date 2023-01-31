import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './sections/HomeHero'
import HomeServices from './sections/HomeServices'
import NumberAndFigures from './sections/NumberAndFigures'
import HomeLocationSection from './sections/HomeLocationSection'
import Footer from './components/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import HomeOurPlans from './sections/HomeOurPlans'
import HomeTrailersRentoutSection from './sections/HomeTrailersRentoutSection'
import HomeStatsSection from './sections/HomeStatsSection'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <HomeHero/>
      <HomeServices/>
      <NumberAndFigures/>
      <HomeOurPlans />
      <HomeTrailersRentoutSection />
      <HomeLocationSection/>
      <HomeStatsSection />
      <Footer/>
    </div>
  )
}

export default App
