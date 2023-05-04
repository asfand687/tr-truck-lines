import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar'
import HomeHero from './sections/HomeHero'
import HomeServices from './sections/HomeServices'
import HomeLocationSection from './sections/HomeLocationSection'
import Footer from './components/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import HomeOurPlans from './sections/HomeOurPlans'
import HomeTestimonialsSection from './sections/HomeTestimonialsSection'
import HomeStatsSection from './sections/HomeStatsSection'
import HomeAboutUsSection from './sections/HomeAboutUsSection'
import HomeContactSection from './sections/HomeContactSection'
import ContactFormModal from './components/ContactFormModal'
import HomeOurVisionSection from './sections/HomeOurVisionSection'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Toaster/>
      <Navbar/>
      <HomeHero/>
      <HomeStatsSection />
      <HomeServices/>
      <HomeOurPlans />
      <HomeAboutUsSection/>
      <HomeOurVisionSection/>
      <HomeTestimonialsSection />
      <HomeContactSection />
      <Footer/>
      <ContactFormModal/>
    </div>
  )
}

export default App
