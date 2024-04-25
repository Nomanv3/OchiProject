import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.3"  className="h-screen w-full bg-zinc-900 pt-1">
      <div className="textStructure mt-40 px-16">
        {["WE CREATE", "eye opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker flex" key={index}>
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1,delay:0.1}} className="w-[9vw] overflow-hidden bg-[url('')] object-cover mr-[1vw] h-[5.7vw] relative top-[0.5vw] bg-red-500 rounded-md "></motion.div>
                )}
               
              </div>
              <h1 className='flex items-center uppercase text-[7vw] font-["Founders_Grotesk"] font-medium leading-[7vw] tracking-tighter '>
                {items}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[0.5px] mt-32 bg-zinc-900 uppercase flex justify-between items-center py-4 px-20">
        {[
          "For public and private companies",
          "From the first pitch to ipo",
        ].map((items, index) => (
          <p
            className="text-md font-light traking-tight leading-none"
            key={index}
          >
            {items}
          </p>
        ))}

        <div className="start flex justify-center  items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex justify-center  items-center  border-[2px] border-zinc-500">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
