import React from 'react'
import Logo from '../assets/logo.svg'
import Close from '../assets/close.svg'

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <nav className={`lg:hidden absolute z-10 top-20 bg-white p-6 flex flex-col items-center rounded-lg shadow-xl space-y-4 transition-all all ease-out duration-300 ${showDrawer ? 'right-0' : '-right-full'}`}>
      <div onClick={() => setShowDrawer(false)} className="w-full flex flex-row-reverse">
        <img src={Close} alt="Close" />
      </div>
      <img className="w-32" src={Logo} alt="Logo" />
      <div>For Shippers</div>
      <div>For Truckers</div>
      <div>Blog</div>
      <button className="rounded-full px-6 py-2 text-white bg-blue-500">Careers</button>
    </nav>
  )
}

export default Drawer