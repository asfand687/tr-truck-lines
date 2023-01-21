import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Drawer from '../components/Drawer'
import Hamburger from '../assets/hamburger.svg'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav>
      <div className="w-full px-4 max-w-7xl mx-auto py-2 flex items-center justify-between">
        <img src={Logo} className="w-32" alt="Logo"/>
        <aside className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-8">
            <li>For Shippers</li>
            <li>For Truckers</li>
            <li>Blog</li>
          </ul>
          <button className="rounded-full px-6 py-2 text-white bg-blue-500">Careers</button>
        </aside>
      </div>
      <img onClick={() => setShowDrawer(!showDrawer)} className='md:hidden absolute top-6 right-4' src={Hamburger} alt="Hamburger" />
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar