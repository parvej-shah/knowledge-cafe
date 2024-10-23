import React from 'react'
import profile_img from '../../assets/images/profile.png'
export default function () {
  return (
    <header className='container mx-auto'>
        <nav className='flex justify-between items-center py-4 '>
            <h2 className='font-bold text-4xl text-[#111111]'>Knowledge Cafe</h2>
            <img src={profile_img} alt="" />
        </nav>
        <hr />
    </header>
  )
}
