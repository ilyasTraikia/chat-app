import React from 'react'

export default function Recent(props) {
  return (
   <div className='flex flex-row justify-between '>
    <div className='flex flex-row space-x-[14px] pb-[12px]'>
      <img src={props.recent.img} className='rounded-[50%]' alt="group" width="70" height="70" />


     <div className='flex flex-col '>
       <div className='text-lg font-semibold '>{props.recent.name}</div>
       <div className='text-[rgba(77,77,77,0.75)] font-medium text-sm'>{props.recent.message}</div>
     </div>
  </div>







  <div className='text-[rgba(0,0,0,0.5)] text-xs font-medium'>
    {props.recent.time}    
  </div>

</div> 
  )
}
