import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { ReactComponent as Ornament } from '../assets/ornament.svg'
import Testimonial01 from '../assets/testimonial-01.png'
import Testimonial02 from '../assets/testimonial-02.png'
import Testimonial03 from '../assets/testimonial-03.png'

const HomeTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-semibold pb-16">
        Here is what our clients say about us
      </h2>
      <div className="w-full">
        <section className="relative max-w-[630px] mx-auto">
          <button disabled={currentSlide === 0} className="absolute top-44 text-4xl -left-20 text-accent" onClick={() => setCurrentSlide(currentSlide - 1)}>
            <FaChevronLeft />
          </button>
          <button disabled={currentSlide === 2} className="absolute top-44 text-4xl -right-20 text-accent" onClick={() => setCurrentSlide(currentSlide + 1)}>
            <FaChevronRight />
          </button>
          <div key="Ornament top" className="absolute -right-16 -top-14 z-0 text-accent">
            <Ornament />
          </div>
          <div key="Ornament bottom" className="absolute -left-12 -bottom-12 z-0 text-accent">
            <Ornament />
          </div>
          <div className="relative z-10 overflow-hidden">
            <div className={`flex rounded-xl transition-transform ease-in-out duration-300 ${currentSlide === 0 ? "translate-x-0" : currentSlide === 1 ? "-translate-x-[630px]" : "-translate-x-[1260px]"}`}>
              <article className="min-w-[630px] text-center bg-primary p-6 rounded-lg">
                <div className="space-y-3">
                  <img className="mx-auto w-20 h-20" src={Testimonial01} alt="Jack Roper" />
                  <h4 className="text-accent">Jack Roper</h4>
                </div>
                <h3 className="text-2xl font-semibold pb-4 text-secondary">
                  It was a very good experience
                </h3>
                <p className="text-accent leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
                </p>
              </article>
              <article className="min-w-[630px] text-center bg-primary p-6 rounded-lg">
                <div className="space-y-3">
                  <img className="mx-auto w-20 h-20" src={Testimonial02} alt="Richard Darcy" />
                  <h4 className="text-accent">Richard Darcy</h4>
                </div>
                <h3 className="text-2xl font-semibold pb-4 text-secondary">
                  It was a nice experience
                </h3>
                <p className="text-accent leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
                </p>
              </article>
              <article className="min-w-[630px] text-center bg-primary p-6 rounded-lg">
                <div className="space-y-3">
                  <img className="mx-auto w-20 h-20" src={Testimonial03} alt="Gavin Mcbride" />
                  <h4 className="text-accent">Gavin Mcbride</h4>
                </div>
                <h3 className="text-2xl font-semibold pb-4 text-secondary">
                  It was awesome experience
                </h3>
                <p className="text-accent leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomeTestimonialsSection