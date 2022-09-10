import React from 'react'



export default function Group(props) {
  return (
    <div className='flex flex-row space-x-[14px] pb-[12px]'>
          <img src={props.group.img} className='rounded-[50%]' alt="group" width="70" height="70" />


          <div className='flex flex-col '>
             <div className='text-lg font-semibold '>{props.group.name}</div>
             <div className='text-[rgba(77,77,77,0.75)] font-medium text-sm'>{props.group.message}</div>
          </div>
    </div>
  )
}
