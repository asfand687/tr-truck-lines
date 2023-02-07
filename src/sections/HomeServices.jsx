import React, {useId} from 'react'
import ServicesCard from '../components/ServicesCard'
import { HiPlus } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

const servicesInfo = [
  {
    number: 1,
    title: "Truck Dispatching",
    className: "bg-service-truckdispatch w-[500px] h-[200px]",
    fade: "fade-right"
  },
  {
    number: 2,
    title: "Billing",
    className: "bg-service-billing w-[500px] h-[200px]",
    fade: "fade-left"
  },
  {
    number: 3,
    title: "Paperwork",
    className: "bg-service-paperwork w-[500px] h-[200px]",
    fade: "fade-right"
  },
  {
    number: 4,
    title: "IFTA",
    className: "bg-service-ifta w-[500px] h-[200px]",
    fade: "fade-left"
  },
  
]

const HomeServices = () => {
  const id = useId()
  return (
    <section className="pt-56 pb-20 md:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between md:px-10">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl pb-8 font-bold">Services <br/> and Pricing</h2>
          </div>
          <h2 data-aos="fade-left" className="font-semibold text-primary text-2xl md:text-3xl">From 5% <br/> of Gross</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mx-auto">
          {
            servicesInfo.map(({number, title, className, fade}) => (
              <div className="flex justify-center items-center" key={`${id}-${number}`}>
                <ServicesCard
                  number={number}
                  title={title}
                  className={className}
                  fade={fade}
                />
              </div>
            ))
          }
        </div>
        <div data-aos="fade-up" className="w-full max-w-[1160px] h-[400px] md:h-[350px] mx-auto mt-8 group relative overflow-hidden bg-service-trailer-lease  p-10 text-white font-semibold rounded-xl">
          <div className="relative z-[9] flex items-center h-full">
            <h2 className="text-4xl md:text-6xl font-bold">Trailer Lease</h2>
          </div>
          
          <div className="absolute z-[8] transition-opacity opacity-30 md:opacity-100 ease-linear duration-200 md:group-hover:opacity-0 left-0 top-0 w-full h-full bg-primary">
          </div>
          <div className="absolute flex items-center h-full top-0 right-10 z-[9]">
            <HiPlus className="text-secondary text-4xl"/>
          </div>
          <div className="z-10 flex justify-center items-center transition-all ease-in duration-200 position absolute top-0 -right-24 group-hover:right-0 bg-secondary w-24 h-full">
            <FiChevronRight className="text-light text-3xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeServices