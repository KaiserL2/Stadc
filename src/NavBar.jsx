import React from 'react';
import Logo from './assets/Logo.svg';
import { motion } from 'framer-motion';

function NavBar() {

  const handleWhyClick = () => {
    const whySection = document.getElementById("why");
    window.scrollTo({ top: whySection.offsetTop, behavior: "smooth" });
  }
  const handleWhyClick2 = () => {
    const whySection = document.getElementById("faq");
    window.scrollTo({ top: whySection.offsetTop, behavior: "smooth" });
  }

  const handleWhyClick3 = () => {
    const whySection = document.getElementById("fea");
    window.scrollTo({ top: whySection.offsetTop, behavior: "smooth" });
  }
  const handleWhyClick4 = () => {
    const whySection = document.getElementById("hero");
    window.scrollTo({ top: whySection.offsetTop, behavior: "smooth" });
  }

  return (
    <div className='flex flex-row items-center bg-black w-full h-28 justify-between fixed top-0 left-0'>
      <motion.div
      className='flex flex-row items-center bg-black w-full h-28 justify-between'
      
      initial={{
        opacity:0
      }}
  
      animate={{
        opacity:1
      }}
  
      transition={{
        duration:4
      }}
      >
      <button onClick={handleWhyClick4}>

      <div className='flex flex-row items-center '>


        <img src={Logo} alt="immagine" className='h-[150px] w-[150px] ' />
        <p className='text-4xl font-arca text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-black '>STADCS</p>

      </div>

      </button>

      <div className='flex flex-row justify-between items-center text-white gap-7 text-xl'>

        <button className='hover:text-2xl hover:text-green-800 hover:font-bold transition-all duration-300' onClick={handleWhyClick3}>Features</button>

        <button className='hover:text-2xl hover:text-green-800 hover:font-bold transition-all duration-300' onClick={handleWhyClick}>Why we</button>

        <button className='hover:text-2xl hover:text-green-800 hover:font-bold transition-all duration-300' onClick={handleWhyClick2}>FAQ</button>

      </div>


      <div className='flex flex-row justify-between items-center gap-10 mr-9'>

        <button className='bg-black py-2 px-6 rounded-xl text-xl font-bold  text-neutral-100 hover:bg-emerald-500 transition-all duration-300'>Login</button>
        <button className='bg-black py-2 px-6 rounded-xl text-xl font-bold  text-neutral-100 hover:bg-indigo-700 transition-all duration-300'>Sing In</button>

      </div>
      </motion.div>

    </div>
  )
}

export default NavBar;