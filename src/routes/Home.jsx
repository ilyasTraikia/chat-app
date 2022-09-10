import React from 'react'
import { SearchBar,Groups,Recents,Friends,RecentCalls } from '../components/index'

export default function Home() {
  return (

    <div className='flex flex-row w-full'>


        <div className='flex flex-col space-y-[43px]' >
          <SearchBar />
          <Groups />
          <Recents />
        </div>





        <div className='ml-[22px]'>
          <Friends />
        </div>





        <div className='ml-[19px]'>
         <RecentCalls />
        </div>

    </div>


  )
}
