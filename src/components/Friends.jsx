import React from 'react'
import dots from '../assets/icons/3dots.svg'
import { friends } from '../data/Friends'
import Friend from './Friend'

export default function Friends() {
  return (
    <div className='w-[310px] p-5 h-[956px] rounded-[20px] bg-white shadow-md flex flex-col space-y-[17px]'>


      <div className='flex flex-row justify-between'>
        <div className='text-xl font-semibold '>Friends</div>
        <button><img src={dots} alt="dots" /></button>
      </div>




      { friends.map((frd,index)=> {
        return( <div key={index}>
                <Friend friend={frd} />
              </div>
            )
     })
     }  


    </div>
  )
}
