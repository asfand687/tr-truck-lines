import React from 'react'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Envelope from '../assets/envelope.svg'
import Phone from '../assets/phone.svg'
import { FaInstagram } from 'react-icons/fa'
import { ReactComponent as Logo } from '../assets/logo-new.svg'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:flex-row md:items-start gap-y-4 py-20 px-4">
        <Link
          className="cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          <Logo className="w-12 h-16 -mt-4"/>
        </Link>
        <article className="flex-1 gap-y-4">
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center lg:space-x-16 pb-4 text-center md:text-left">
            <h2>Home</h2>
            <h2>Truckers</h2>
            <h2>Privacy Policy</h2>
          </div>
          <div className="flex flex-col items-center md:flex-row text-sm justify-center text-blue-500 lg:space-x-16 pb-6 md:pb-24 gap-y-2">
            <article className="flex items-center space-x-2">
              <img className="w-4" src={Envelope} alt="Envelope"/> 
              <span>connect@trtrucklines.com</span>
            </article>
            <article className="flex item-center space-x-2">
              <img className="w-3" src={Phone} alt="Phone"/> 
              <span>+1 (917) 400-1006</span>
            </article>
          </div>
          <p className="text-center">Copyright © TR Truck Lines 2023</p>
        </article>
        <article className="flex space-x-10">
          <FaInstagram className="text-primary text-3xl" />
        </article>
      </div>
    </footer>
  )
}

export default Footer