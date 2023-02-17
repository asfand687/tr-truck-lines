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
              Welcome to TR Truck Lines, your reliable and efficient freight dispatch solution. Our mission is to provide top-notch logistics services that make shipping simple and stress-free for our customers.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              We understand the complexities and challenges of managing a successful shipment, and that's why we've brought together a team of experts with decades of experience in the industry. Our team works tirelessly to provide customized, cost-effective logistics solutions that meet the unique needs of each of our customers.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              Our services include carrier selection, load planning, route optimization, real-time tracking, documentation handling, and much more. We have established strong partnerships with a network of carriers, allowing us to provide our customers with a wide range of options and the flexibility to choose the right transportation method for their shipment.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              At TR Truck Lines, we are committed to providing the highest level of customer service and satisfaction. Whether you are a small business or a large corporation, we are here to help you manage your shipments with ease and peace of mind.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              We invite you to explore our website and learn more about the services we offer. If you have any questions or would like to discuss your logistics needs, please don't hesitate to contact us. Thank you for choosing TR Truck Lines as your dispatch solution.
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