import React from 'react'
import {account,appLang,changeNum,ChatBackup,DeleteAcc,messageSettings,
  Ntfs,privacy,Security,theme,twoStep} from '../assets/index'

export default function Settings() {
  return (
    <div className='w-[528px] h-[859px] px-[22px] py-[26px] rounded-[20px] bg-white shadow-md'>

      <div className='font-semibold text-xl'>Profile Settings</div>


      <div className='flex flex-col space-y-[33px] mt-[45px] ml-[80px]'>

        <button className='flex flex-row space-x-[33px]'>
          <img src={account} alt="account" />
          <div className='text-xl'>Account.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={theme} alt="Theme" />
          <div className='text-xl'>Theme.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={Security} alt="Security" />
          <div className='text-xl'>Security.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={privacy} alt="Privacy" />
          <div className='text-xl'>Privacy.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={twoStep} alt="TwoStepVerification" />
          <div className='text-xl'>Two-step verification.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={Ntfs} alt="NotificationSettings" />
          <div className='text-xl'>Notification Settings.</div>
        </button>

        <button className='flex flex-row space-x-[33px]'>
          <img src={changeNum} alt="ChangeNumber" />
          <div className='text-xl'>Change Number.</div>
        </button>



        <button className='flex flex-row space-x-[33px]'>
          <img src={ChatBackup} alt="ChatBackup" />
          <div className='text-xl'>Chat Backup.</div>
        </button>



        <button className='flex flex-row space-x-[33px]'>
          <img src={messageSettings} alt="MessageSettings" />
          <div className='text-xl'>Message Settings.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={appLang} alt="AppLanguage" />
          <div className='text-xl'>App Language.</div>
        </button>


        <button className='flex flex-row space-x-[33px]'>
          <img src={DeleteAcc} alt="DeleteAccount" />
          <div className='text-xl'>Delete Account.</div>
        </button>

      </div>

    </div>
  )
}
