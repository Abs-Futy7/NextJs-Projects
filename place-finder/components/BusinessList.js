"use client"
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import BusinessItem from './BusinessItem';

const BusinessList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const businessesLen = 5;

  const handleNext = () => {
    if (startIndex + itemsPerPage < businessesLen) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };


  return (
    <div className='ml-4 p-2'>
        <h2 className='text-3xl font-semibold flex justify-between items-center'>Top Nearby Places
        <span className='text-3xl font-medium ml-2 flex cursor-pointer'>
        {startIndex > 0 && (
            <FaAngleLeft 
              className='hover:text-purple-400' 
              onClick={handlePrev} 
            />
          )}
            {(startIndex + itemsPerPage < businessesLen) && (
            <FaAngleRight 
              className='hover:text-purple-400' 
              onClick={handleNext} 
            />
          )}
        </span>
        </h2>
        <div>
            <BusinessItem startIndex={startIndex} itemsPerPage={itemsPerPage}/>
        </div>
    </div>
  )
}

export default BusinessList