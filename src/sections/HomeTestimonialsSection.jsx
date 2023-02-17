import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const HomeTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-semibold pb-12">
        Here is what our clients say about us
      </h2>
      <div className="w-full">
        <section className="relative max-w-[630px] mx-auto">
          <button disabled={currentSlide === 0} className="absolute top-32 text-4xl -left-20 text-primary" onClick={() => setCurrentSlide(currentSlide - 1)}>
            <FaChevronLeft />
          </button>
          <button disabled={currentSlide === 2} className="absolute top-32 text-4xl -right-20 text-primary" onClick={() => setCurrentSlide(currentSlide + 1)}>
            <FaChevronRight />
          </button>
          <div className="overflow-hidden">
            <div className={`flex transition-transform ease-in-out duration-300 ${currentSlide === 0 ? "translate-x-0" : currentSlide === 1 ? "-translate-x-[630px]" : "-translate-x-[1260px]"}`}>
              <article className="min-w-[630px] text-center bg-[#eaf3f4] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold pb-4">
                  It was a very good experience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
                </p>
              </article>
              <article className="min-w-[630px] text-center bg-[#eaf3f4] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold pb-4">
                  It was a nice experience
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu
                </p>
              </article>
              <article className="min-w-[630px] text-center bg-[#eaf3f4] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold pb-4">
                  It was awesome experience
                </h3>
                <p>
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