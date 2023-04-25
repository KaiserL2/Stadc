import React from 'react'
import Acqua from './assets/acqua.png'
import Proteine from './assets/proteine.png'

function Features() {
  return (
    <div className='text-white text-3xl flex flex-row justify-between px-20 font-reca mt-72 py-32' id='fea'>

      <div  className='text-white text-lg flex flex-col justify-between p-5 shadow-3xl shadow-teal-700 rounded-xl'>

        <img src={Acqua} className='h-64 '/> 

        <h1 className='text-center font-bold mt-10 text-4xl text-teal-700 '>Acqua</h1>

        <p className='w-[450px] text-center font-bold mt-10'>Acqua maestosa ed ella portera solo miglioramenti della forza della natura</p>

      </div>


      <div  className='text-white text-lg flex flex-col justify-between p-5 shadow-3xl shadow-indigo-700 rounded-xl'>
        <img src={Proteine} className='h-64 w-[450px]'/>

        <h1 className='text-center font-bold mt-10 text-4xl text-indigo-700 '>Proteine</h1>

        <p className='w-[450px] text-center font-bold mt-10'>Proteina maestosa ed ella portera solo miglioramenti della forza della natura e Go Men </p>
      </div>

    </div>
  )
}

export default Features