import React from 'react'
import Map from '../assets/map.png'

const HomeLocationSection = () => {
  return (
    <section data-aos="zoom-out" className="flex flex-col md:flex-row md:items-center py-8 md:py-20 px-4 text-center md:text-left gap-y-10">
      <article className='flex-1 flex justify-end'>
        <div className="w-full lg:w-[70%] space-y-6">
          <h2 className="text-3xl font-semibold">
            Located in Avnel NJ
          </h2>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
          </div>
        </div>
      </article>
      <article className='flex-1'>
        <img className="w-full h-[400px]" src={Map} alt="Map" />
      </article>
    </section>
  )
}

export default HomeLocationSection