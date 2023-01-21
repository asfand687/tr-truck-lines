import React from 'react'
import Logo from '../assets/logo.svg'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Envelope from '../assets/envelope.svg'
import Phone from '../assets/phone.svg'

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-7xl mx-auto flex items-start border-t py-20">
        <img className="w-36" src={Logo} alt="Logo"/>
        <article className="flex-1">
          <div className="flex justify-center lg:space-x-16 pb-4">
            <h2>Home</h2>
            <h2>Shippers</h2>
            <h2>Truckers</h2>
            <h2>Careers</h2>
            <h2>Privacy Policy</h2>
          </div>
          <div className="flex text-sm justify-center text-blue-500 lg:space-x-16 pb-24">
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
          <img className="w-8" src={Linkedin} alt="Linkedin"/>
          <img className="w-8" src={Facebook} alt="Facebook"/>
          <img className="w-8" src={Twitter} alt="Twitter"/>
        </article>
      </div>
    </footer>
  )
}

export default Footer