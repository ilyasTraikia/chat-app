import React from 'react'



export default function Calls(props) {
  return (

       <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-[20px]'>

          <div className='flex flex-row space-x-[14px] pb-[12px]'>
            <img src={props.call.img} className='rounded-[50%]' alt="group" width="52" height="52" />


           <div className='flex flex-col'>
             <div className='text-sm font-semibold '>{props.call.person}</div>
             <div className='text-[rgba(77,77,77,0.75)] font-medium text-xs'>{props.call.time}</div>
           </div>
          </div>





          <img src={props.call.color} alt="arrow" />

        </div> 







  <button>
    <img src={props.call.way} alt="call" />   
  </button>

</div> 
  )
}
