import React from 'react'

const HomeOurPlans = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-4xl font-semibold pb-12">
        Our Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-32 px-8">
        <article data-aos="fade-right" className="bg-gradient py-10 px-14 text-white relative flex flex-col justify-center text-center items-center overflow-hidden">
          <div className='absolute top-6 -right-10 text-xs bg-blue-600 text-white p-1 px-10 transform rotate-45'>Best Value</div>
          <p className="bg-white px-6 py-1 text-blue-300 font-semibold rounded-full flex justify-center items-center">
            Enterprise
          </p>
          <div className="py-4">
            <h2 className="text-3xl font-semibold">5% of Gross</h2>
            <p className="text-sm">Per Month</p>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
          </ul>
          <div className="pt-10 flex justify-center">
            <button className="bg-transparent border border-white px-6 py-1 text-white font-semibold rounded-full flex justify-center items-center">
              Get Started
            </button>
          </div>
        </article>

        <article data-aos="fade-left" className="bg-gradient-sec py-10 px-14 text-white relative flex flex-col justify-center text-center items-center">
          <p className="bg-white px-6 py-1 text-blue-300 font-semibold rounded-full flex justify-center items-center">
            Enterprise
          </p>
          <div className="py-4">
            <h2 className="text-3xl font-semibold">8% of Gross</h2>
            <p className="text-sm">Per Month</p>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
            <li>
              Lorem ipsum dolor
            </li>
          </ul>
          <div className="pt-10 flex justify-center">
            <button className="bg-transparent border border-white px-6 py-1 text-white font-semibold rounded-full flex justify-center items-center">
              Get Started
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HomeOurPlans