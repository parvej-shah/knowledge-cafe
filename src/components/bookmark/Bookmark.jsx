import React from 'react'

export default function Bookmark({bookmark}) {
  return (
    <div className='p-5 bg-white rounded-lg'>
        <h2 className='font-semibold text-lg text-[#111111]'>{bookmark.title}</h2>
    </div>
  )
}
