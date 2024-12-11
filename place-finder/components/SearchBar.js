"use client"
import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 border border-purple-400 px-4 py-2 rounded-2xl'>
        <FiSearch className='text-xl text-gray-400'/>
        <input type= "text"
        placeholder='Search Here...'
        className='bg-transparent focus:outline-none w-full'
        onKeyDown={(e)=> e.key === 'Enter'} />    
    </div>
  )
}

export default SearchBar