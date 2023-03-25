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
                At TR Truck Lines, our vision is to be the leading provider of innovative and reliable freight dispatch services, delivering unparalleled value to our customers and stakeholders.
                We see a future where shipping is seamless, efficient, and accessible to businesses of all sizes. A future where technology, expertise, and customer focus come together to create a logistics experience that exceeds expectations.
                We strive to empower our customers with the tools and resources they need to manage their shipments with confidence, and to make shipping a competitive advantage for their businesses. Our vision is to help our customers succeed by providing them with the highest quality of service and the most advanced logistics solutions available.
                We believe in the power of collaboration and teamwork, and we are committed to building strong relationships with our customers, partners, and employees. Our vision is to create a thriving community of logistics professionals who share our passion for excellence and are dedicated to making a positive impact in the industry.
                At TR Truck Lines, we are passionate about what we do and believe in the power of our vision. Join us as we strive to shape the future of the logistics industry and deliver unparalleled value to our customers.
              </p>
          </div>
        </div>
        </article>
      </section>
    </section>
  )
}

export default HomeAboutUsSection