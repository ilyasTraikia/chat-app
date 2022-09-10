import React from 'react'
import { QrIcon,profile,EditProfile,profileStatus,EditProfilePhoto,Help,ChangeWallpaper,invite, changeNum} from '../assets/index'



export default function Profile() {
  return (
    <div className='w-[528px] px-[22px] py-[26px] h-[859px] rounded-[20px] bg-white shadow-md '>

     <div className='font-semibold text-xl'>Account Settings</div>






     <div className='flex flex-col space-y-[37px] ml-[76px] mt-[60px]'>

        <button className='flex flex-row space-x-[25px]'>
          <img src={profile} alt="profile" />
          <div className='text-xl'>Profile.</div>
        </button>


        <button className='flex flex-row space-x-[25px]'>
          <img src={EditProfile} alt="profile" />
          <div className='text-xl'>Edit Profile Name.</div>
        </button>


        <button className='flex flex-row space-x-[25px]'>
          <img src={profileStatus} alt="profile" />
          <div className='text-xl'>Edit Profile Status Info.</div>
        </button>



        <button className='flex flex-row space-x-[25px]'>
          <img src={EditProfilePhoto} alt="profile" />
          <div className='text-xl'>Edit Profile Photo.</div>
        </button>



        <button className='flex flex-row space-x-[25px]'>
          <img src={Help} alt="profile" />
          <div className='text-xl'>Help.</div>
        </button>



        <button className='flex flex-row space-x-[25px]'>
          <img src={ChangeWallpaper} alt="profile" />
          <div className='text-xl'>Change Wallpaper.</div>
        </button>



        <button className='flex flex-row space-x-[25px]'>
          <img src={invite} alt="profile" />
          <div className='text-xl'>Invite.</div>
        </button>

   


     </div>

    </div>
  )
}
