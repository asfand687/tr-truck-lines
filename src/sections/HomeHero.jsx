import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import BGVideo from '../assets/bg-video.mp4'

const HomeHero = () => {
  return (
    <section className="h-[calc(100vh-65px)]">
      <div className="relative">
        <div className="fixed left-10 bottom-0 bg-yellow-400 rounded-full z-50 w-24 h-24 flex justify-center items-center animate-pulse">
          <AiTwotonePhone className="text-5xl" />
        </div>
        <div className="absolute w-full h-[calc(100vh-65px)] z-20 flex justify-center items-center text-white gap-x-16">
          <article className="flex">
            <div data-aos="fade-right" className="w-full text-center lg:text-left lg:max-w-[450px]">
              <div className="h-[6px] w-36 bg-yellow-600 mb-6"></div>
              <h2 className="text-4xl lg:text-7xl font-bold lg:max-w-[500px]">Freight Dispatch Service</h2>
              <p className="py-4">Full dispatch services for trucks. We provide high quality dispatching services with the best industry standards and additional realted services.</p>
              <button className="bg-black text-yellow-600 rounded w-full max-w-[280px] py-3 font-medium">
                Get a Dispatcher
              </button>
            </div>
          </article>
          <article data-aos="fade-left" className="bg-white rounded-2xl md:p-10 p-6 md:py-16 border shadow-2xl text-gray-800">
            <h2 className="font-semibold text-3xl pb-4">
              Contact Us For Free Setup
            </h2>
            <p className="text-gray-600 text-base max-w-[400px] pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
            </p>
            <form className="space-y-4">
              <div>
                <input className="bg-gray-200 rounded outline-none border w-full px-4 py-2" type="text" placeholder="Full Name" />
              </div>
              <div>
                <input className="bg-gray-200 rounded outline-none border w-full px-4 py-2" type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <input className="bg-gray-200 rounded outline-none border w-full px-4 py-2" type="email" placeholder="Email Address" />
              </div>
              <div>
                <input className="py-3 rounded w-full bg-black text-yellow-600 font-medium mt-4" type="submit" value="Send Request" />
              </div>
            </form>
        </article>
        </div>
        <video className="w-full h-[calc(100vh-65px)] object-cover" autoPlay playsinline muted loop>
          <source src={BGVideo} type="video/mp4" />
        </video>
        <div className="absolute z-10 top-0 left-0 h-[calc(100vh-65px)] w-full bg-[#0000007a]"></div>
        <div className="flex flex-col-reverse md:flex-row items-center px-4 py-6 md:py-20 w-full max-w-7xl mx-auto">

        </div>
      </div>
    </section>
  )
}

export default HomeHero