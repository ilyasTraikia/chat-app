import React from 'react'
import dots from '../assets/icons/3dots.svg'
import {recents} from '../data/recents'
import Recent from './Recent'

export default function Recents() {
  return (
    <div className='w-[427px] h-[462px] rounded-[20px] p-5 bg-white flex flex-col space-y-[18px] '>
          
      <div className='flex flex-row justify-between'>
        <div className='text-xl font-semibold '>Recents</div>
        <button><img src={dots} alt="dots" /></button>
      </div>



      { recents.map((rct,index)=> {
      return( <div key={index}>
                <Recent recent={rct} />
              </div>
            )
     })
     }  


    </div>
  )
}
