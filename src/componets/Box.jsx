import React from 'react'


import viratImg from '../Assets/vk.jpeg'

export default function Box() {
  return (
    <div>
        
     <div className='flex justify-between'>
     <div className="h-[500px] w-[300px] bg-amber-400  rounded-md">
      <img src={viratImg} className='rounded-md h-[50%] w-[100%]'  alt="virat kholi" />

      <p className='text-3xl font-bold text-red-600 '>name:virat-kohli</p>

     </div>

     <div className="h-[500px] w-[300px] bg-amber-400 rounded-md">
      <img src={viratImg} className='rounded-md h-[50%] w-[100%]'  alt="virat kholi" />

     </div>

     <div className="h-[500px] w-[300px] bg-amber-400  rounded-md">
      <img src={viratImg} className='rounded-md h-[50%] w-[100%]'  alt="virat kholi" />

     </div>
     <div className="h-[500px] w-[300px] bg-amber-400  rounded-md">
      <img src={viratImg} className='rounded-md h-[50%] w-[100%]'  alt="virat kholi" />

     </div>

     </div>



    </div>
  )
} 
