import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {


  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='border-t-2  flex whitespace-nowrap uppercase  overflow-hidden '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:5}}  className='text-[22vw] leading-none font-[Neue Montreal]  font-semibold pt-1 -mb-[1vw] pr-10'>WE ARE OCHIS</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:5}} className='text-[22vw] leading-none font-[Neue Montreal] font-semibold pt-1 -mb-[1vw] pr-10' >WE ARE OCHIS</motion.h1>
        </div>
    </div>
  )
}

export default Marquee