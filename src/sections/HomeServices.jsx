import React from 'react'
import Dispatch from '../assets/dispatching.png'
import Billing from '../assets/bililng.png'
import Paperwork from '../assets/paperwork.png'
import IFTA from '../assets/ifta.png'

const HomeServices = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center pb-8 font-bold">Services & Pricing</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <article className="bg-gray-200 rounded p-6 w-[480px] flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Truck Dispatching</h2>
              <p className="text-sm text-gray-600 max-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="w-[200px]" src={Dispatch} alt="Dispatching"/>
          </article>
          <article className="bg-gray-200 rounded p-6 w-[480px] flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Billing</h2>
              <p className="text-sm text-gray-600 max-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="w-[200px]" src={Billing} alt="Billing"/>
          </article>
          <article className="bg-gray-200 rounded p-6 w-[480px] flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold pb-2">Paperwork</h2>
              <p className="text-sm text-gray-600 max-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="w-[200px]" src={Paperwork} alt="Paperwork"/>
          </article>
          <article className="bg-gray-200 rounded p-6 w-[480px] flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold pb-2">IFTA</h2>
              <p className="text-sm text-gray-600 max-w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, tempore molestiae omnis excepturi nam.</p>
            </div>
            <img className="w-[200px]" src={IFTA} alt="IFTA"/>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeServices