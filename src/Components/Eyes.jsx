import React, { useEffect, useState } from "react";

const Eyes = () => {

  const [rotate ,setrotate] = useState(0);
   
  useEffect(()=>{
          window.addEventListener("mousemove" ,(e)=>{
              let mousex = e.clientX;
              let mousey = e.clientY;

              let deltax = mousex - window.innerWidth / 2;
              let deltay = mousey - window.innerHeight/2;

              var angle= Math.atan2(deltay,deltax) * (180 / Math.PI)
              setrotate(angle - 180)
                      })
  })

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" data-scroll-section className='relative h-full w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" flex items-center justify-center h-[15vw] w-[15vw] bg-zinc-100 rounded-full">
            <div className=" h-2/3 w-2/3 bg-black rounded-full">
            <div  style={{transform:`translate(-50% ,-50% ) rotate(${rotate}deg)`}} className= " line w-full h-10 relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="h-7 w-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center h-[15vw] w-[15vw] bg-zinc-100 rounded-full">
            <div className="h-2/3 w-2/3 bg-black rounded-full relative">
            <div  style={{transform:`translate(-50% ,-50% ) rotate(${rotate}deg)`}} className= " line w-full h-10 relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="h-7 w-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
