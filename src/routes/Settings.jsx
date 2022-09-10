import React from 'react'
import {LongSearchBar,Profile,Setting} from '../components/index'

export default function Settings() {
  return (
    <div className='flex flex-col space-y-[26px] w-full'>

    <div className='w-full '>
      <LongSearchBar />
    </div>


    <div className='w-full flex flex-row space-x-[32px]'>
         <Profile />
         <Setting />  
    </div>
      
  </div>
  )
}
