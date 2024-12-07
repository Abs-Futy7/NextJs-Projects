"use client";
import React from 'react'

const Button = () => {
  return (
    <div className='mt-3'>
        <button className='bg-green-500 py-1 px-4'
        onClick={()=> console.log("Clicked")}>
            Click Here
        </button>
    </div>
  )
}

export default Button