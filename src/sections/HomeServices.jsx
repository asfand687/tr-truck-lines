import React from 'react'
import Dispatch from '../assets/dispatching.png'
import Billing from '../assets/bililng.png'
import Paperwork from '../assets/paperwork.png'
import IFTA from '../assets/ifta.png'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const HomeServices = () => {
  return (
    <section className="py-56 md:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl text-center pb-8 font-bold">Services & Pricing</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <article data-aos="flip-right" className="bg-gray-100 relative rounded-xl shadow-xl p-6 w-[480px] md:h-[250px] overflow-hidden flex flex-col-reverse items-center md:items-start md:flex-row justify-between text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Truck Dispatching</h2>
              <p className="text-sm text-gray-600 w-full lg:max-w-[200px] px-6 md:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="w-[300px] md:absolute right-0 bottom-0" src={Dispatch} alt="Dispatching" />
          </article>
          <article data-aos="flip-left" className="bg-gray-100 relative rounded-xl shadow-xl p-6 w-[480px] md:h-[250px] overflow-hidden flex flex-col-reverse items-center md:items-start md:flex-row justify-between text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Billing</h2>
              <p className="text-sm text-gray-600 w-full lg:max-w-[200px] px-6 md:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="md:absolute right-0 bottom-0 w-[300px]" src={Billing} alt="Billing" />
          </article>
          <article data-aos="flip-right" className="bg-gray-100 overflow-hidden relative rounded-xl shadow-xl p-6 w-[480px] md:h-[250px] flex flex-col-reverse items-center md:items-start md:flex-row justify-between text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Paperwork</h2>
              <p className="text-sm text-gray-600 w-full lg:max-w-[200px] px-6 md:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="md:absolute -right-14 -bottom-10 w-[300px]" src={Paperwork} alt="Paperwork" />
          </article>
          <article data-aos="flip-left" className="bg-gray-100 overflow-hidden relative rounded-xl shadow-xl p-6 w-[480px] md:h-[250px] flex flex-col-reverse items-center md:items-start md:flex-row justify-between text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold pb-2">IFTA 24/7 Support</h2>
              <p className="text-sm text-gray-600 w-full lg:max-w-[200px] px-6 md:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="md:absolute -right-0 -bottom-0 w-[250px]" src={IFTA} alt="IFTA" />
          </article>
        </div>
        <div>
          <article className={`group relative w-[500px] h-[200px] overflow-hidden bg-service-truckdispatch p-10 text-white font-semibold`}>
            <div className="relative z-[9]">
              <h2 className="text-4xl">01</h2>
              <h3 className="text-3xl">Truck Dispatching</h3>
            </div>
            <div className="absolute z-[8] transition- ease-linear duration-200 group-hover:opacity-0 left-0 top-0 w-full h-full bg-[#1E73FB]">
            </div>
            <div className="absolute top-20 right-10 z-[9]">
              <HiPlus className="text-[#4DDE82] text-4xl"/>
            </div>
            <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-[#4DDE82] w-24 h-full">
              <FiChevronRight className="text-[#EAF3F4] text-3xl"/>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeServices