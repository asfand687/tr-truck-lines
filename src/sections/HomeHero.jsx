import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import BGVideo from '../assets/bg-video.mp4'

const HomeHero = () => {
  return (
    <section className="h-screen md:h-[calc(100vh-65px)]">
      <div className="relative">
        <div className="fixed left-10 bottom-10 bg-primary rounded-full z-50 w-16 h-16 flex justify-center items-center animate-pulse">
          <AiTwotonePhone className="relative z-20 text-5xl text-secondary" />
          <div className="absolute z-10 w-20 h-20 rounded-full bg-accent animate-ping"></div>
        </div>
        <div className="absolute w-full  h-screen md:h-[calc(100vh-65px)] z-20 flex flex-col md:flex-row justify-center items-center text-white gap-x-16">
          <article className="mt-[200px] px-4 pb-10 md:mt-0 md:pb-0">
            <div data-aos="fade-right" className="w-full text-center lg:text-left lg:max-w-[450px]">
              <div className="mx-auto md:mx-0 h-[6px] w-36 bg-primary mb-6"></div>
              <h2 className="text-4xl lg:text-7xl font-bold lg:max-w-[500px]">Freight Dispatch Service</h2>
              <p className="py-4">Full dispatch services for trucks. We provide high quality dispatching services with the best industry standards and additional realted services.</p>
              <button className="bg-primary text-xl text-light rounded w-full max-w-[280px] py-3 font-semibold">
                Get a Dispatcher
              </button>
            </div>
          </article>
        </div>
        <video className="w-full  h-screen md:h-[calc(100vh-65px)] object-cover" autoPlay playsInline muted loop>
          <source src={BGVideo} type="video/mp4" />
        </video>
        <div className="absolute z-10 top-0 left-0  h-screen md:h-[calc(100vh-65px)] w-full bg-[#0000007a]"></div>
        <div className="flex flex-col-reverse md:flex-row items-center px-4 py-6 md:py-20 w-full max-w-7xl mx-auto">

        </div>
      </div>
    </section>
  )
}

export default HomeHero