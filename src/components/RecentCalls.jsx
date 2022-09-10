import React from 'react'
import dots from '../assets/icons/3dots.svg'
import {calls} from '../data/calls'
import Calls from './Calls'

export default function RecentCalls() {
  return (
    <div className='w-[310px] h-[956px] rounded-[20px] bg-white shadow-md flex flex-col space-y-[17px] p-5 '>

      <div className='flex flex-row justify-between'>
        <div className='text-xl font-semibold '>Recent Calls</div>
        <button><img src={dots} alt="dots" /></button>
      </div>




      { calls.map((call,index)=> {
      return( <div key={index}>
                <Calls call={call} />
              </div>
            )
     })
     }
        
    </div>
  )
}
