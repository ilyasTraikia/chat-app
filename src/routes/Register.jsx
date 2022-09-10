import React, { useState } from 'react'
import {google} from '../assets/index'

export default function Register() {
 
    // The state for the form input values
    const [formValues,setFormValues] = useState({fullName:"",email:"",password:"",confirmedPassword:""})




    // The function for handling the change in the input fields
    function handleInputChange(e) {
         const targetedElement = e.target
         const {name,value} = targetedElement
         setFormValues({...formValues,[name]:value})
    }




    // the function for handling the form submitting
    function handleFormSubmit(e) {
        e.preventDefault()
         handleInputsError()
    }




    // the function for handling errorsin input elements
    function handleInputsError() {
        var username = /^[a-zA-Z0-9]+$/
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


     // Checking for email validity   
      if(!formValues.email.match(mailformat)) {
          const emailInput = document.getElementById('input-email')
          const emailLabel = document.getElementById('label-email')
          const emailErrorSpan = document.getElementById('email-error-div')
    
          emailInput.classList.add('outline-red-500') 
          emailLabel.classList.add('text-red-500') 
          emailErrorSpan.innerHTML = "invalid email address *"
          return false
      }



        // Checking for username validity   
     if(!formValues.fullName.match(username)) {
         const fullnameInput = document.getElementById('input-fullname')
         const fullnameLabel = document.getElementById('label-fullname')
         const fullnameErrorSpan = document.getElementById('fullName-error-div')
   
         fullnameInput.classList.add('outline-red-500') 
         fullnameLabel.classList.add('text-red-500') 
         fullnameErrorSpan.innerHTML = "invalid username *"
         return false
     }



     







    }
  




    

  return (
    <div className='flex justify-center items-center'>
    <div className=' w-[23.5rem] flex flex-col items-center  p-6'>

    


        {/* The text */}
        <div className='flex flex-col mt-3 items-center'>
            <div className='h3'>Create an Account</div>
            <div className='small-body'>Sign up now to get started with an account.</div>
        </div>


        {/* The login with google option */}
        <button className='flex flex-row justify-center items-center space-x-5 mt-7 w-full googleBtn'>
            <img src={google} alt="google" />
            <div className='btn-primary-text'>Sign up with Google</div>
        </button>


        {/* The OR line */}
        <div className='flex flex-row space-x-4 items-center mt-6'>
            <div className='w-[7.8rem] border-[1px] border-[rgba(28,52,84,0.26)] h-0'></div>
            <div className='text-[rgba(28,52,84,0.26)] text-sm'>OR</div>
            <div className='w-[7.8rem] border-[1px] border-[rgba(28,52,84,0.26)] h-0'></div>
        </div>


        {/* The Sign up  form */}
        <form className='flex flex-col w-full' onSubmit={handleFormSubmit}>
            <label htmlFor="input-email" className='input-labels mt-4 ' id='label-fullname'>Full Name</label>
            <input className='input mt-1 outline-none' type="text"  id='input-fullname' name='fullName' value={formValues.fullName} onChange={handleInputChange} required/>
            <div id='fullName-error-div' className='text-red-500 text-base mt-2'></div>


            <label htmlFor="input-password" className='input-labels mt-4'id='label-email'>Email Address</label>
            <input className='input mt-1 outline-none outline-offset-0' type="email" id='input-email' name='email' value={formValues.email} onChange={handleInputChange} required/>
            <div id='email-error-div' className='text-red-500 text-base mt-2'></div>


            <label htmlFor="input-email" className='input-labels mt-4 ' id='label-password'>password</label>
            <input className='input mt-1 outline-none' type="password" id='input-password' name='password' value={formValues.password} onChange={handleInputChange} required/>
            <div id='password-error-div' className='text-red-500 text-base mt-2'></div>


            <label htmlFor="input-email" className='input-labels mt-4 ' id='label-confirmPassword'>Confirm Password</label>
            <input className='input mt-1 outline-none' type="password" id='input-confirm-password' name='confirmedPassword' value={formValues.confirmedPassword} onChange={handleInputChange} required/>
            <div id='confirmPassword-error-div' className='text-red-500 text-base mt-2'></div>

            {/* The remember me option */}
            <div className='flex space-x-[11px] mt-4'>
                <input type="checkbox"/>
                 

                <div>
                  I have read and agree to the <a href='#' className='text-[#1676F3] underline underline-offset-8'>Terms of Service</a>
                </div>   
            </div>

         

            {/* The log in button */}
            <button type='submit' className='input border-none bg-[#1A66FF] font-semibold text-base text-white mt-[1.3rem] outline-none'>Get Started</button>
        </form>






        {/* The don't have an account sign up option */}
        <div className='font-normal text-sm mt-8'>
        Already have an account? <a className='text-[#1676F3]' href='#'>Log in</a>
        </div>


        

    </div>
   </div>   
  )
}
