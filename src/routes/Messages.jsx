import React from 'react'
import {SearchBar,Groups,Recents,Chat} from '../components/index'

export default function Messages() {
  return (
    <div className='flex flex-row space-x-[26px]'>

      <div className='flex flex-col space-y-[43px]'>
        <SearchBar />
        <Groups />
        <Recents />
      </div>




      <div>
        <Chat />
      </div>

    </div>
  )
}
