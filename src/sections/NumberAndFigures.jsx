import React from 'react'
import Scania from '../assets/scania.png'
import Volvo from '../assets/volvo.png'
import MAN from '../assets/man.png'
import DAF from '../assets/daf.png'
import Renault from '../assets/renault.png'

const NumberAndFigures = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto flex justify-between">
        <article className="w-full max-w-[600px] space-y-6">
          <h2 className="text-4xl font-bold">Number & Figures</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam quaerat perferendis nam necessitatibus praesentium</p>
        </article>
        <article className="flex-1 px-8 space-y-6">
          <div className="flex items-center justify-between">
            <img className="w-28" src={Scania} alt="Scania"/>
            <img className="w-28" src={Volvo} alt="Volvo"/>
          </div>
          <div className="flex justify-center">
            <img className="w-28" src={MAN} alt="MAN"/>
          </div>
          <div className="flex items-center justify-between">
            <img className="w-32" src={DAF} alt="DAF"/>
            <img className="w-28" src={Renault} alt="Renault"/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default NumberAndFigures