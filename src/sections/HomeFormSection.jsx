import React from 'react'
import Bg from '../assets/truck-driver.png'

const HomeFormSection = () => {
  return (
    <section className="w-full relative px-4">
      <div className="z-10 flex items-center w-full max-w-[800px] md:h-full md:absolute right-0 top-0 ">
        <div data-aos="fade-left" className="bg-white rounded-2xl p-10 border shadow-xl">
          <h2 className="font-semibold text-3xl pb-4">
            Contact Us For Free Setup
          </h2>
          <p className="text-gray-600 text-base max-w-[400px] pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </p>
          <form className="space-y-4">
            <div>
              <input className="bg-gray-200 outline-none border w-full px-4 py-2" type="text" placeholder="Full Name" />
            </div>
            <div>
              <input className="bg-gray-200 outline-none border w-full px-4 py-2" type="tel" placeholder="Phone Number" />
            </div>
            <div>
              <input className="bg-gray-200 outline-none border w-full px-4 py-2" type="email" placeholder="Email Address" />
            </div>
            <div>
              <input className="text-white py-2 w-full bg-violet-800 font-medium" type="submit" value="Send Request" />
            </div>
          </form>
        </div>
      </div>
      <img src={Bg} alt="Truck Driver" className="hidden md:block w-full" />
    </section>
  )
}

export default HomeFormSection