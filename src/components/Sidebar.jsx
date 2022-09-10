import React from 'react'
import {User,chat,Home,Logout,Notifications,settings} from '../assets/index'
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className='w-[186px] h-[954px] bg-[#1A66FF] rounded-[20px] flex flex-col items-center justify-center '>
         <img src={User} alt="user" width="100" height="100" className='rounded-[50%]'/>


         <div className='flex flex-col space-y-[40px] mt-[78px] justify-center items-center w-full  '>
           <NavLink className=" w-full py-[21px] pr-[45px] pl-[52px] rounded-l-[20px]"  style={({ isActive }) => {return { backgroundColor: isActive ? "#004BE1" : "",borderRight: isActive ? "8px solid #FFE81A" : ""};}} to="/home"><img src={Home} alt="home" /></NavLink>
           <NavLink className=" w-full py-[21px] pr-[45px] pl-[52px] rounded-l-[20px]"  style={({ isActive }) => {return { backgroundColor: isActive ? "#004BE1" : "",borderRight: isActive ? "8px solid #FFE81A" : ""};}} to="/messages"><img src={chat} alt="messages" /></NavLink>
           <NavLink className=" w-full py-[21px] pr-[45px] pl-[52px] rounded-l-[20px]"  style={({ isActive }) => {return { backgroundColor: isActive ? "#004BE1" : "",borderRight: isActive ? "8px solid #FFE81A" : ""};}} to="/notifications"><img src={Notifications} alt="notifications" /></NavLink>
           <NavLink className=" w-full py-[21px] pr-[45px] pl-[52px] rounded-l-[20px]"  style={({ isActive }) => {return { backgroundColor: isActive ? "#004BE1" : "",borderRight: isActive ? "8px solid #FFE81A" : ""};}} to="/settings"><img src={settings} alt="settings" /></NavLink>
         </div>


         <button className='mt-[187px]'><img src={Logout} alt="logout" /></button>
    </div>
  )
}
