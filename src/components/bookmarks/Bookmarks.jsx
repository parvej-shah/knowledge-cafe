import React, { useEffect, useState } from 'react'
import Bookmark from '../bookmark/Bookmark';

export default function Bookmarks({bookmarks}) {
    const [newBookmarks,setNewBookmarks] = useState([]);
    useEffect(()=>{
        setNewBookmarks(bookmarks);
    },[bookmarks])
  return (
    <div className='w-full p-7 bg-[#111111]/5 rounded-lg'>
        <h2 className='font-bold text-2xl text-[#111111]'>Bookmarked Blogs:{bookmarks.length}</h2>
        <div className='mt-7 space-y-4'>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    </div>
  )
}
