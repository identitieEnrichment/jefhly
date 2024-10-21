import React from 'react'
import { TbDental } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { GiHospital } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";


const Mid = () => {
  return (
    <div className='flex justify-between items-center bg-[#E7F0EF] gap-10 p-5'>
      
      <div className='flex flex-col justify-center items-center ml-64'>
        <div className='flex items-center'>
          <div className='bg-[#0B675A] p-3 rounded-sm'>
            <TbDental className='text-white size-9'/>
          </div>
          <span className='ml-3 font-extrabold '>1,200 </span>
          <FaPlus className='text-[#0B675A] ml-2'/>
        </div>
        <p className='mt-2 text-center'>Happy client</p>
      </div>
      
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center'>
          <div className='bg-[#0B675A] p-3 rounded-sm'>
            <GiHospital className='text-white size-9'/>
          </div>
          <span className='ml-3 font-extrabold '>15 </span>
          <FaPlus className='text-[#0B675A] ml-2'/>
        </div>
        <p className='mt-2 text-center'>Year experience</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center'>
          <div className='bg-[#0B675A] p-3 rounded-sm'>
            <FaUserDoctor className='text-white size-9'/>
          </div>
          <span className='ml-3 font-extrabold '>70 </span>
          <FaPlus className='text-[#0B675A] ml-2'/>
        </div>
        <p className='mt-2 text-center'>Doctor & Staff</p>
      </div>

      <div className='flex flex-col justify-center items-center mr-64'>
        <div className='flex items-center'>
          <div className='bg-[#0B675A] p-3 rounded-sm'>
            <FaCalendarAlt className='text-white size-9'/>
          </div>
          <span className='ml-3 font-extrabold '>340 </span>
          <FaPlus className='text-[#0B675A] ml-2'/>
        </div>
        <p className='mt-2 text-center'>Online Appointment</p>
      </div>
      
    </div>
  )
}

export default Mid
