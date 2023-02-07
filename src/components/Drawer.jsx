import React from 'react'
import Logo from '../assets/logo.svg'
import Close from '../assets/close.svg'

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <nav className={` md:hidden fixed z-50 top-20 bg-white p-6 flex flex-col items-center rounded-lg shadow-xl space-y-4 transition-all all ease-out duration-300 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div onClick={() => setShowDrawer(false)} className="w-full flex flex-row-reverse">
        <img src={Close} alt="Close" />
      </div>
      <img className="w-32" src={Logo} alt="Logo" />
      <li>About Us</li>
      <li>Our Vision</li>
      <li>Pricing</li>
      <button className="rounded-lg font-semibold px-6 py-2 bg-primary text-light">Get Loads</button>
    </nav>
  )
}

export default Drawer