import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/logo-new.svg'
import Drawer from '../components/Drawer'
import Hamburger from '../assets/hamburger.svg'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav>
      <div className="w-full px-4 max-w-7xl mx-auto py-2 flex items-center justify-between overflow-hidden">
        <Logo className="w-12 h-16"/>
        <aside className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-8">
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Pricing</li>
          </ul>
          <button className="rounded font-semibold px-6 py-2 bg-primary text-light">Get a Dispatcher</button>
        </aside>
      </div>
      <img onClick={() => setShowDrawer(!showDrawer)} className='md:hidden absolute top-6 right-4' src={Hamburger} alt="Hamburger" />
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar