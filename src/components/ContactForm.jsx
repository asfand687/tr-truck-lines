import React from 'react'

const ContactForm = () => {
  return (
    <article id="contact" data-aos="fade-left" className="bg-white rounded-2xl md:p-10 p-6 py-16 border shadow-2xl text-gray-800">
      <h2 className="text-primary font-semibold text-3xl pb-4">
        Contact Us For Free Setup
      </h2>

      <form className="space-y-4">
        <div>
          <input className="bg-gray-100 rounded outline-none border w-full px-4 py-2 ring-1 focus:ring-primary transition-all ease-out duration-300" type="text" placeholder="Full Name" />
        </div>
        <div>
          <input className="bg-gray-100 rounded outline-none border w-full px-4 py-2 ring-1 focus:ring-primary transition-all ease-out duration-300" type="tel" placeholder="Phone Number" />
        </div>
        <div>
          <input className="bg-gray-100 rounded outline-none border w-full px-4 py-2 ring-1 focus:ring-primary transition-all ease-out duration-300" type="email" placeholder="Email Address" />
        </div>
        <div>
          <input className="bg-gray-100 rounded outline-none border w-full px-4 py-2 ring-1 focus:ring-primary transition-all ease-out duration-300" type="text" placeholder="Truck Type and Equipment" />
        </div>
        <div>
          <input className="py-3 rounded text-xl w-full bg-primary text-light font-semibold mt-4" type="submit" value="Send Request" />
        </div>

      </form>
    </article>
  )
}

export default ContactForm