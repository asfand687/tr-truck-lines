import React from 'react'
import Map from '../assets/map.png'

const HomeLocationSection = () => {
  return (
    <section className="flex items-center py-20">
      <article className='flex-1 flex justify-end'>
        <div className="w-[70%] space-y-6">
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
        <img src={Map} alt="Map"/>
      </article>
    </section>
  )
}

export default HomeLocationSection