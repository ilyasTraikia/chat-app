import React from 'react'
import dots from '../assets/icons/3dots.svg'
import { groups } from '../data/groups'
import Group from './Group'


export default function Groups() {
  return (
    <div className='w-[427px] h-[347px] rounded-[20px] p-5 bg-white shadow-md flex flex-col space-y-[17px]'>

      <div className='flex flex-row justify-between'>
        <div className='text-xl font-semibold '>Groups</div>
        <button><img src={dots} alt="dots" /></button>
      </div>





     { groups.map((grp,index)=> {
      return( <div key={index}>
                <Group group={grp} />
              </div>
            )
     })
     }  
         
    </div>
  )
}
