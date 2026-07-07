import React from 'react'
import Inquiry from './Inquiry'
import Whatsapp from '@/components/Whatsapp'
import MobileFooter from '@/components/Inquiry/MobileFooter'

export default function page() {
  return (
    <>
    <Inquiry/>
    <div className='hidden md:block'>
      <Whatsapp />
    </div>
    <MobileFooter/>
    
    </>
  )
}
