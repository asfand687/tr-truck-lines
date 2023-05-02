import React, { useState } from 'react'

const ContactFormModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const updatePhoneNumber = (target) => {
    setPhoneNumber(parseInt(target.value) ? parseInt(target.value) : "")
  }
  return (
    <div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
            <form>
              <h3 className="text-lg font-bold pb-4 text-primary">
                Please enter your email to receive a phone call from us
              </h3>
              <div className='relative'>
                <input 
                  value={phoneNumber}
                  onChange={({target}) => updatePhoneNumber(target)}
                  type="text" 
                  placeholder="Phone Number" 
                  className="input input-bordered input-md w-full" 
                />
                <button className="absolute right-0 top-0 text-white btn bg-primary btn-accent">Button</button>
              </div>
            </form>
        </label>
        </label>
    </div>
  )
}

export default ContactFormModal
