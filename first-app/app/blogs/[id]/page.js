import { notFound } from 'next/navigation';
import React from 'react'

const Blogpage = ({params}) => {
    const {id} = params;
    if(id != "1" || id != "2"){
      notFound();
    }
  return (
    <div className='mt-6'>Blog id is : {id}</div>
  )
}

export default Blogpage