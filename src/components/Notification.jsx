import React from 'react'
import notification from '../assets/icons/NotificationIcon.svg'
import {Notifications} from '../data/notifications'

export default function Notification() {
  return (
    <div className='w-full h-[869px] rounded-[20px] bg-white shadow-md pl-[35px] pr-[26px] pt-[35px] pb-[102px]'>


      {Notifications.map((notf,index)=>{
        return(
          <div key={index} className='flex flex-row space-x-[35px] items-center py-[33px]'>
       
          <img src={notification} alt="notification" />
          <div className='font-medium text-base'>{notf}</div>
   
        </div>
   
        )
      })}

    



    </div>
  )
}
