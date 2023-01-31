import React from 'react'
import TrailerDispatch from '../assets/dispatch-truck.jpg'

const HomeTrailersRentoutSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 text-center  gap-y-10">
      <h2 className="text-4xl font-bold max-w-[350px]">Trailers Rentout with Dispatch
      </h2>
      <img src={TrailerDispatch} className="w-full h-[500px] object-cover" alt="Dispatch Truck" />
    </section>
  )
}

export default HomeTrailersRentoutSection