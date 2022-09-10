import React from 'react'
import {call,camera,dots,User} from '../assets/index'

export default function Chat() {
  return (
    <div className='w-[640px] h-[956px] rounded-[20px] bg-white shadow-md px-[51px] py-[24px]'>

          <div className='flex flex-row items-center justify-between'style={{borderBottom:"1px solid rgba(0,0,0,0.25)"}}>

          <div className='flex flex-row items-center space-x-[20px] pb-[12px]'>
              <img src={User} className='rounded-[50%]' alt="group" width="75" height="75" />
              <div className='flex flex-col'>
               <div className='text-2xl font-semibold '>Swathi</div>
               <div className='text-[rgba(0,0,0,0.85)] font-normal text-sm'>Online</div>
              </div>
           </div>
           








           <div className='flex flex-row space-x-[40px]'>
               <button><img src={call} alt="call" /></button>
               <button><img src={camera} alt="camera" /></button>
               <button><img src={dots} alt="dots" /></button>
            </div>
          </div>
          
         




           




          </div>



   
  )
}
