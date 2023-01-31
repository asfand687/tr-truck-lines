import React from 'react'
import Trucks from "../assets/trucks.jpg"
import { TbTruckDelivery } from 'react-icons/tb'
import { FaMoneyCheckAlt, FaWeightHanging } from 'react-icons/fa'

const HomeStatsSection = () => {
  return (
    <section className="relative h-[1000px] md:h-[700px]">
      <div className="absolute top-0 left-0 w-full h-[1000px] md:h-[700px] z-10 bg-black opacity-80" />
      <div className="absolute left-0 z-0 top-0 w-full h-[1000px] md:h-[700px]  bg-blue-500 ">
        <img src={Trucks} alt="Trucks" className="w-full h-[1000px] md:h-[700px] object-cover" />
      </div>
      <div className="relative px-4 z-20 w-full max-w-5xl mx-auto flex flex-col justify-center font-bold pt-16">
        <div className="h-[6px] w-36 bg-yellow-600 mb-6" />
        <h2 className="text-5xl text-white">
          Our Milestones
        </h2>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-center items-center md:gap-x-16 pt-24 py-16">
          <article className="flex px-8 flex-col items-center text-center md:border-r-[0.25px] border-gray-500">
            <TbTruckDelivery className="text-yellow-600 text-8xl pb-4" />
            <div className="text-white">
              <h2 className=" pb-2 text-6xl font-bold text-white">5000+</h2>
              <p className="text-2xl">Freight Loads Moved</p>
            </div>
          </article>
          <article className="flex px-8 flex-col items-center text-center md:border-r-[0.25px] border-gray-500">
            <FaMoneyCheckAlt className="text-yellow-600 text-8xl pb-4" />
            <div className="text-white">
              <h2 className=" pb-2 text-6xl font-bold text-white">$7500 +</h2>
              <p className="text-2xl">Average Gross Revenue</p>
            </div>
          </article>
          <article className="flex px-8 flex-col items-center text-center">
            <FaWeightHanging className="text-yellow-600 text-8xl pb-4" />
            <div className="text-white">
              <h2 className=" pb-2 text-6xl font-bold text-white">58</h2>
              <p className="text-2xl">Mln Lbs Dispatched</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default HomeStatsSection