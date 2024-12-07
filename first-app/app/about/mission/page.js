import Button from '@/app/components/Button'
import React from 'react'
import cat from '@/public/meow.jpg'
import Image from 'next/image'
const page = () => {
  return (
    <div>Mission page
      <Button/>
      <Image src={cat} alt="cat"/>
    </div>
    
  )
}

export default page