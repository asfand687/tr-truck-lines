import React from 'react'
import Hero from '../assets/truck-hero.webp'

const HomeHero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center px-4 py-6 md:py-20 w-full max-w-7xl mx-auto">
        <article className="flex">
          <div className="w-full text-center lg:text-left lg:max-w-[450px]">
            <div className="h-[6px] w-36 bg-blue-500 mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-bold ">Dispatch Services for Your Better Future</h2>
            <p className="py-4">Full dispatch services for trucks. We provide high quality dispatching services with the best industry standards and additional realted services.</p>
            <button className="bg-blue-500 rounded px-4 py-3 text-white font-medium">
              Get a Dispatcher
            </button>
          </div>
        </article>
        <article>
          <img className="lg:absolute right-0 top-32 lg:rounded-tl-xl w-full max-w-[800px] lg:rounded-bl-xl" src={Hero} alt="Hero" />
        </article>
      </div>
    </section>
  )
}

export default HomeHero