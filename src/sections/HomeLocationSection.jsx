import React from 'react'
import Map from '../assets/map.png'

const HomeLocationSection = () => {
  return (
    <section data-aos="flip-up" className="flex flex-col md:flex-row md:items-center py-8 md:pb-0 md:pt-20 text-center md:text-left gap-y-10 md:gap-y-0">
      <article className='flex-1 flex justify-end px-4'>
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
        <img className="w-full h-[400px] object-cover" src={Map} alt="Map" />
      </article>
    </section>
  )
}

export default HomeLocationSection