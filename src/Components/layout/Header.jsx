import React from 'react'

const Header = () => {
  return (
    <div className='px-16 py-6 fixed top-0 w-full shadow-xl bg-primaryGreen z-[1000]'>
        <div className='flex justify-between items-center ' >
            <div className='text-3xl font-semibold text-white'>
                    JEFHLY
            </div>
            <div className='flex space-x-4 text-sm '>
                <div className='px-3 py-2 bg-white rounded-full'>Appointment</div>
                <div className='px-3 py-2 bg-white rounded-full'>Our Services</div>
                <div className='px-3 py-2 bg-white rounded-full'>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default Header
