import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './sections/HomeHero'
import HomeServices from './sections/HomeServices'
import HomeLocationSection from './sections/HomeLocationSection'
import Footer from './components/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import HomeOurPlans from './sections/HomeOurPlans'
import HomeTrailersRentoutSection from './sections/HomeTrailersRentoutSection'
import HomeStatsSection from './sections/HomeStatsSection'
import HomeAboutUsSection from './sections/HomeAboutUsSection'
import HomeContactSection from './sections/HomeContactSection'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar/>
      <HomeHero/>
      <HomeStatsSection />
      <HomeServices/>
      <HomeOurPlans />
      <HomeAboutUsSection/>
      <HomeContactSection />
      <Footer/>
    </div>
  )
}

export default App
