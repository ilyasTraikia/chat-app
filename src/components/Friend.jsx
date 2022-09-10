import React from 'react'

export default function Friend(props) {
  return (
    <div className='flex flex-row justify-between '>
    <div className='flex flex-row space-x-[14px] pb-[12px]'>
      <img src={props.friend.img} className='rounded-[50%]' alt="group" width="52" height="52" />


     <div className='flex flex-col '>
       <div className='text-sm font-semibold '>{props.friend.name}</div>
       <div className='text-[rgba(77,77,77,0.75)] font-medium text-xs'>{props.friend.message}</div>
     </div>
  </div>







  <div className='text-[rgba(0,0,0,0.5)] text-[10px] leading-4 font-medium'>
    {props.friend.time}    
  </div>

</div> 
  )
}
