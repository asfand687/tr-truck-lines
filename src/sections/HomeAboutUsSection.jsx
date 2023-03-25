import React from 'react'
import HomeLocationSection from './HomeLocationSection'
import Vision from '../assets/vision.jpg'

const HomeAboutUsSection = () => {
  return (
    <section>
      <div className="px-4">
        <article className="pb-6">
          <h2 className="text-4xl font-semibold text-center pb-4">About Us</h2>
          <div className="w-full max-w-4xl mx-auto space-y-3">
            <p data-aos="fade-right">
              TR Truck Lines is a logistics company that offers reliable and efficient freight dispatch services. They have an experienced team that provides customized logistics solutions to meet the unique needs of each customer. Their services include carrier selection, load planning, route optimization, real-time tracking, and more. They are committed to providing the highest level of customer service and satisfaction.
            </p>
          </div>
        </article>
      </div>
      <HomeLocationSection/>
      <section className="flex flex-col-reverse md:flex-row pb-10">
        <article className="flex-1">
          <img className="w-full object-cover" src={Vision} alt="Our Vision" />
        </article>
        <article className="flex-1 text-center md:text-left pt-4 space-y-6">
        <div className="w-full space-y-6 px-4 md:pl-14">
            <h2 className="text-3xl font-semibold">
            Our Vision
          </h2>
            <div className="w-full max-w-[530px] pb-6 md:pb-0">
              <p>
                At TR Truck Lines, we strive to disrupt the logistics landscape by providing cutting-edge, reliable freight dispatch solutions that prioritize customer satisfaction. Our vision is to empower businesses with the resources to streamline their operations, enhance efficiency, and gain a competitive advantage.
              </p>
          </div>
        </div>
        </article>
      </section>
    </section>
  )
}

export default HomeAboutUsSection