import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="w-full max-w-7xl mx-auto py-2 flex items-center justify-between">
        <img src={Logo} className="w-32" alt="Logo"/>
        <aside className="flex items-center space-x-12">
          <ul className="flex space-x-8">
            <li>For Shippers</li>
            <li>For Truckers</li>
            <li>Blog</li>
          </ul>
          <button className="rounded-full px-6 py-2 text-white bg-blue-500">Careers</button>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar