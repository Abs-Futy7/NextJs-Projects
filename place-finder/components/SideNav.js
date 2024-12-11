import React from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image'
import {FiSearch} from "react-icons/fi"
import {IoHeartOutline} from "react-icons/io5"

const SideNav = () => {
  return (
    <div className='w-[80px] items-center flex flex-col p-2 h-screen space-y-5 shadow-md shadow-purple-700 sticky top-0 z-20'>
        <div className='w-20'>
            <Image src={logo} alt = "logo"/>
        </div>
        <div className=''>
            <FiSearch className='text-2xl hover:cursor-pointer hover:scale-110 hover:text-purple-300'/>
        </div>
        <div className=''>
            <IoHeartOutline className='text-2xl hover:cursor-pointer hover:scale-110 hover:text-purple-300'/>
        </div>
    </div>
  )
}

export default SideNav