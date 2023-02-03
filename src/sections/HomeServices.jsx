import React from 'react'
import Dispatch from '../assets/dispatching.png'
import Billing from '../assets/bililng.png'
import Paperwork from '../assets/paperwork.png'
import IFTA from '../assets/ifta.png'

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
      </div>
    </section>
  )
}

export default HomeServices