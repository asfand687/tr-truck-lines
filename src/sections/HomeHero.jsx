import React from 'react'
import Hero from '../assets/truck-hero.webp'

const HomeHero = () => {
  return (
    <section>
      <div className="flex items-center py-20 max-w-7xl mx-auto">
        <article className="flex">
          <div className="max-w-[450px]">
            <div className="h-[6px] w-36 bg-blue-500 mb-6"></div>
            <h2 className="text-5xl font-bold ">Dispatch Services for Your Better Future</h2>
            <p className="py-2">Full dispatch services for trucks. We provide high quality dispatching services with the best industry standards and additional realted services.</p>
            <button className="bg-blue-500 rounded px-4 py-3 text-white font-medium">
              Get a Dispatcher
            </button>
          </div>
        </article>
        <article>
          <img className="absolute right-0 top-32 rounded-tl-xl w-[800px] rounded-bl-xl" src={Hero} alt="Hero"/>
        </article>
      </div>
    </section>
  )
}

export default HomeHero