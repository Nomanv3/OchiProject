import { motion, useAnimate, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="  w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="w-full cards flex  gap-10 mt-10">
          <motion.div
            onHoverStart={() => handlehover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className=" absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-4xl   leading-none traking-tighter overflow-hidden ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card1 h-full rounded-xl  w-full  overflow-hidden">
              <img
                className="h-full w-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (item, index) => (
                <button className="py-2 px-2 text-sm border-zinc-200 mt-2 border-[1px] ml-2 rounded-full hover:bg-slate-700">
                  {item}
                </button>
              )
            )}
          </motion.div>
          {/* card 2 start from here ok */}
          <motion.div
            onHoverStart={() => handlehover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" relative card-container  w-1/2 h-[75vh]"
          >
            <h1 className=" absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-5xl   leading-none  flex overflow-hidden  traking-tighter  ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card1 h-full rounded-xl  w-full overflow-hidden">
              <img
                className="h-full w-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
              <button className="py-1 px-1 border-[0.5px]  text-xs leading-7  rounded-full ml-4">
                {item}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
