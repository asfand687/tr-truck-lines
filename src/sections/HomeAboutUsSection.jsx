import React from 'react'
import HomeLocationSection from './HomeLocationSection'
import Vision from '../assets/vision.jpg'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const HomeAboutUsSection = () => {
  return (
    <section>
      <div className="px-4">
        <article className="pb-6">
          <h2 className="text-4xl font-semibold text-center pb-4">About Us</h2>
          <div className="w-full max-w-4xl mx-auto space-y-3">
            <p data-aos="fade-right">
              TR Truck Lines is a freight dispatch company that offers reliable and efficient freight dispatch services. They have an experienced team that provides customized freight solutions to meet the unique needs of each carrier. Their services include carrier selection, load planning, route optimization, real-time tracking, and more. They are committed to providing the highest level of customer service and satisfaction.
            </p>
          </div>
        </article>
      </div>
      <HomeLocationSection/>
      <div data-aos="fade-up" className="w-full max-w-[1160px] h-[400px] md:h-[350px] mx-auto mt-8 group relative overflow-hidden bg-vision-section  p-10 text-white font-semibold rounded-xl">
        <div className="relative z-[9] flex items-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold">Our Vision</h2>
          <p className="absolute w-[600px] transition-all ease-in-out duration-300 -right-full top-20 group-hover:right-20">
            At TR Truck Lines, we strive to disrupt the logistics landscape by providing cutting-edge, reliable freight dispatch solutions that prioritize customer satisfaction. Our vision is to empower businesses with the resources to streamline their operations, enhance efficiency, and gain a competitive advantage.
          </p>
        </div>

        <div className="absolute z-[8] transition-opacity opacity-30 md:opacity-100 ease-linear duration-200 md:group-hover:opacity-0 left-0 top-0 w-full h-full bg-primary">
        </div>
        <div className="absolute flex items-center h-full top-0 right-10 z-[9]">
          <HiPlus className="text-secondary text-4xl" />
        </div>
        <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
          <FiChevronRight className="text-light text-3xl" />
        </div>
      </div>
    </section>
  )
}

export default HomeAboutUsSection