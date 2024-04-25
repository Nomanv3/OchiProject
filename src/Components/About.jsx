import React from 'react'

const About = () => {
  return (
    <div className='w-fullm p-20 bg-[#CDEA68] rounded-tl-xl rounded-tr-xl'>
                     <h1 className='font-[Neue Montreal] text-[4vw] leading-[4.4vw]  '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell product , explain complex ideas, and hire great people.</h1>

                     <div className='w-full border-t-[1px] mt-20 pt-10 border-[#8e976d] flex '>

                     <div className='w-1/2 mt-2 '>
                        <h1 className='font-[Neue Montreal] text-zinc-900 text-[3.7vw]'>Our Approach:</h1>
                        <button className='px-8 uppercase flex items-center gap-10 py-5 rounded-full text-white mt-5 bg-zinc-900 text-[1.2vw]'>Read More

                        <div className='w-3 h-3 rounded-full bg-zinc-200'></div>
                        </button>
                     </div>
                     <div className="w-1/2 h-[80vh] rounded-3xl overflow-hidden">
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1608145640433-937abd82a4e1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                     </div>
                     </div>
    </div>
  )
}

export default About