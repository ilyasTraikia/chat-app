import React from 'react'
import {LongSearchBar,Notification} from '../components/index'

export default function Notifications() {
  return (
    <div className='flex flex-col space-y-[26px] w-full'>

      <div className='w-full '>
        <LongSearchBar />
      </div>


      <div className='w-full '>
           <Notification />  
      </div>
        
    </div>
  )
}
