import React, { useState } from 'react'
import ImmagineHero from './assets/th.png'
import {motion} from 'framer-motion'

function Hero() {

  const  [dia,setDia] = useState(false)

  let testo =['Go','Buy Apple']

  return (
    <motion.div className='bg-black flex flex-row justify-between items-center py-36 px-20' id='hero'
    
    initial={{
      opacity:0
    }}

    animate={{
      opacity:1
    }}

    transition={{
      duration:2
    }}

    >


      <div className='flex flex-col text-white w w-[500px]'>

        <motion.h1 className='text-5xl font-bold mb-5'
        
        animate={{
          scale: dia?[0.6,1.4,1,1 ]:null,
          rotate:dia?[180,0,90,0]:null
        }}
        >The Last <motion.span className='text-red-500 hover:text-7xl transition-all duration-300' 
        
        whileHover={{
          color: "cyan"
        }}
        animate={{
          color:dia ? "yellow":null
        }}

        >Apple</motion.span></motion.h1>

        <p className='mb-5'>Questa è la mela del santogral l'unica 
          nel suo genere assai spongbob aveva provata a rubare 
          ba agli non c'è la fece a rubarla ma piaque cosi tanto a provarla a buttare.</p>

        <div className=' flex flex-row justify-between gap-5'>

          <motion.button 

          initial={{
            opacity:dia ? [1,0]:null
          }}

          animate={{
            opacity:dia ? [0,1] : null
          }}
          transition={{
            duration:3
          }}
          
          className='text-sm px-6 py-2 bg-red-700 rounded-xl font-bold hover:bg-cyan-800 transition-all duration-300' 
          
          onClick={()=>{setDia(true)}}>{dia ? testo[0]:testo[1]}</motion.button>

          <p>Compra una mela così ti puoi saziare e godere la pietanza divina.</p>

        </div>

      </div>


      <div>

        <img src={ImmagineHero}/>

      </div>


    </motion.div>
  )
}

export default Hero