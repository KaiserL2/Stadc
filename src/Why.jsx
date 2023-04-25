import React, { createContext } from 'react'
import Ciclo from './assets/ciclo.svg'
import Rombo from './assets/rombo.svg'
import Rusa from './assets/rusa.svg'



function Why() {


  let Generatore = [{
    immagine: Ciclo,
    parole:"Ciclerete e aiuterete l'economia a fiorire e a poter esser amati dal tutti i popoli del mondi"
  },
  {
    immagine: Rombo,
    parole:"Ciclerete e aiuterete l'economia a fiorire e a poter esser amati dal tutti i popoli del mondi"
  },
  {
    immagine: Rusa,
    parole:"Ciclerete e aiuterete l'economia a fiorire e a poter esser amati dal tutti i popoli del mondi"
  }]

  return (
    <div className='px-20 py-28 mt-72' id='why'>

      <h1 className='text-4xl text-center font-bold text-white mb-8'>Perchè scegliere Noi ?</h1>

      <p className='font-medium text-lg text-white text-center'>Offriamo un ottimo servizio alle vostre imprese e potete stare certi che rimanerete la prima in capolista meglio della juve e del milan nello scorso campionato e rimmarremmo solo nella ultima specie umana e rimaneremo vivi sulla vita di ogni essere umano sulla terra</p>

      <div className='flex flex-row justify-between items-center mt-28'>

        {Generatore.map((x,index)=>{
          
          return (
            <div className='flex flex-col justify-center items-center'>

              <img src={x.immagine} key={index} className='mb-12' />
              <p key={index} className='text-white text-center text-xl'>{x.parole}</p>

            </div>
          )

        })}

      </div>

    </div>
  )
}

export default Why