import React from 'react'
import HomeLocationSection from './HomeLocationSection'
import HomeStatsSection from './HomeStatsSection'
import Vision from '../assets/vision.jpg'

const HomeAboutUsSection = () => {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center">About Us</h2>
      <HomeLocationSection/>
      <section className="flex flex-col items-center pb-10">
        <article className="flex-1">
          <img className="w-full h-[400px] object-cover" src={Vision} alt="Our Vision"/>
        </article>
        <article className="flex-1 text-center md:text-left pt-4 space-y-6">
        <div className="w-full space-y-6 px-4 md:pl-14">
          <h2 className="text-3xl font-semibold">
            Our Vision
          </h2>
          <div className="w-full max-w-[530px]">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
          </div>
        </div>
        </article>
      </section>
      <HomeStatsSection />
    </section>
  )
}

export default HomeAboutUsSection