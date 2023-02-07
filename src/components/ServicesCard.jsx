import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const servicesCard = ({number, title, className, fade}) => {
  return (
    <article data-aos={fade} className={`group relative overflow-hidden  p-10 text-white font-semibold rounded-lg ${className}`}>
      <div className="relative z-[9] flex flex-col justify-center h-full">
        {number && <h2 className="text-3xl md:text-4xl">0{number}</h2>}
        <h3 className="text-2xl md:text-3xl">{title}</h3>
      </div>
      <div className="absolute z-[8] opacity-30 md:opacity-100 transition- ease-linear duration-200 md:group-hover:opacity-0 left-0 top-0 w-full h-full bg-primary">
      </div>
      <div className="absolute top-20 right-10 z-[9]">
        <HiPlus className="text-secondary text-4xl"/>
      </div>
      <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
        <FiChevronRight className="text-light text-3xl"/>
      </div>
  </article>
  )
}

export default servicesCard