import React from 'react'

const HomeOurPlans = () => {
  return (
    <section className="pt-10 pb-20">
      <h2 className="text-center text-4xl font-semibold pb-12">
        Our Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-32 px-8">
        <article data-aos="fade-right" className="w-full border shadow-xl max-w-xs rounded-xl text-white">
          <div className="py-16 bg-white text-primary text-center">
            <h2 className="text-3xl font-semibold">5% of Gross</h2>
            <p className="text-sm text-accent">Per Month</p>
          </div>
          <ul className="bg-primary p-6 py-10 flex flex-col items-center rounded-b-xl">
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
            <li className="pt-10 flex justify-center">
              <button className="bg-secondary text-primary text-xl rounded px-10 py-3 font-semibold">
              Get Started
            </button>
            </li>
          </ul>
        </article>

        <article data-aos="fade-left" className="w-full border shadow-xl max-w-xs rounded-xl text-white">
          <div className="py-16 bg-white text-primary text-center">
            <h2 className="text-3xl font-semibold">8% of Gross</h2>
            <p className="text-sm text-accent">Per Month</p>
          </div>
          <ul className="bg-primary p-6 py-10 flex flex-col items-center rounded-b-xl">
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
            <li className="pt-10 flex justify-center">
              <button className="bg-secondary text-primary text-xl rounded px-10 py-3 font-semibold">
                Get Started
              </button>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default HomeOurPlans