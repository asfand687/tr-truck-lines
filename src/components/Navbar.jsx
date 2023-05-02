import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/logo-new.svg'
import Drawer from '../components/Drawer'
import Hamburger from '../assets/hamburger.svg'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="w-full px-4 max-w-7xl mx-auto py-2 flex items-center justify-between overflow-hidden">
        <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          <Logo className="w-12 h-16"/>
        </Link>
        <aside className="hidden lg:flex items-center space-x-12">
          <ul className="flex space-x-8">
            <li>
              <Link
                offset={-85}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                offset={-165}
                to="vision"
                smooth={true}
                duration={500}
                spy={true}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
              >
                Our Vision
              </Link>
            </li>
            <li>
              <Link
                offset={-85}
                to="pricing"
                smooth={true}
                duration={500}
                activeClass='font-semibold text-primary'
                className="cursor-pointer"
                spy={true}
                >
                  Pricing
              </Link>
            </li>
          </ul>
          <Link
            offset={-115}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            >
            <button className="rounded font-semibold px-6 py-2 bg-primary text-light">
              Get a Dispatcher
            </button>
          </Link>
        </aside>
      </div>
      <img onClick={() => setShowDrawer(!showDrawer)} className='md:hidden absolute top-6 right-4' src={Hamburger} alt="Hamburger" />
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </nav>
  )
}

export default Navbar