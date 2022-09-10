import React from 'react'
import {google} from '../assets/index'
import './style.css'

export default function Login() {
  return (
    <div className='flex justify-center items-center '>
    <div className=' w-[22.5rem] flex flex-col items-center  p-6'>

   


        {/* The text */}
        <div className='flex flex-col mt-3 items-center'>
            <div className='h3'>Log in to your Account</div>
            <div className='small-body'>Welcome back, please enter your details.</div>
        </div>


        {/* The login with google option */}
        <button className='flex flex-row justify-center items-center space-x-5 mt-7 w-full googleBtn '>
            <img src={google} alt="google" />
            <div className='btn-primary-text'>Continue with Google</div>
        </button>


        {/* The OR line */}
        <div className='flex flex-row space-x-4 items-center mt-6'>
            <div className='w-[7.8rem] border-[1px] border-[rgba(28,52,84,0.26)] h-0'></div>
            <div className='text-[rgba(28,52,84,0.26)] text-sm'>OR</div>
            <div className='w-[7.8rem] border-[1px] border-[rgba(28,52,84,0.26)] h-0'></div>
        </div>


        {/* The login form */}
        <form className='flex flex-col w-full'>
            <label htmlFor="input-email" className='input-labels mt-4 '>Email Address</label>
            <input className='input mt-1 outline-none' type="email" id='input-email'/>
            <label htmlFor="input-password" className='input-labels mt-4'>Password</label>
            <input className='input mt-1 outline-none' type="password" id='input-password'/>

            {/* The remember me option */}
            <div className='flex justify-between mt-4'>
                <div className='flex flex-row space-x-[11px]'>
                <input type="checkbox"/>
                <span className='text-[rgba(27,43,65,0.72)] text-sm'>Remember me</span>
                </div>


                <a className='text-[#333333] font-semibold text-sm' href='#'>
                  Forgot Password?
                </a>
            </div>

         

            {/* The log in button */}
            <button type='submit' className='input border-none bg-[#1A66FF] font-semibold text-base text-white mt-[1.3rem]'>Log in</button>
        </form>






        {/* The don't have an account sign up option */}
        <div className='font-normal text-sm mt-8'>
            Don't have an account ? <a className='text-[#1676F3]' href='#'>Sign Up</a>
        </div>


        

    </div>
   </div>   
  )
}
