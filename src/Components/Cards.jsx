import React from 'react'

const Cards = () => {
  return (
    <div className='h-screen w-full bg-zinc-900 flex gap-5 px-16 items-center '>
        <div className='cardcontainer w-1/2 h-[70vh] '>
            <div className=' card relative  rounded-xl w-full  h-full bg-[#004D43]  flex items-center justify-center'>
                <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             <button className=' absolute py-1 px-5 left-10 bottom-10 border-2 rounded-full'>&copy;2023-2024</button>
            </div>
        </div>
        <div className='cardcontainer h-[70vh]  w-1/2 flex gap-5'>
            <div className='w-1/2 relative  rounded-xl h-full bg-[#212121] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className=' absolute py-1 px-3 left-10 bottom-10 border-2 rounded-full'>Rating 5.0 on clutch</button>
            </div>
            <div className='w-1/2 rounded-xl flex justify-center items-center h-full  bg-[#212121] relative'>
                <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className=' absolute py-1 px-4 left-10 bottom-10 border-2 rounded-full'>&copy;2023-2024</button>
            </div>
        </div>
    </div>
  )
}

export default Cards