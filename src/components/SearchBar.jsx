import React from 'react'
import search from '../assets/icons/Search.svg'
import dots from '../assets/icons/3dots.svg'

export default function SearchBar() {
  return (
    <form className='w-[427px] h-[59px] rounded-[20px] flex flex-row justify-between p-[23px] bg-white shadow-md'>
     <div className='order-1 flex flex-row items-center'>
      <input className='order-2 outline-none px-3 ml-[30px]' placeholder='Search' type="search" />
      <button className='order-1' type='submit'><img src={search} alt="search" /></button>
     </div> 
     <button className='order-2'><img src={dots} alt="dots" /></button>
    </form>
  )
}
