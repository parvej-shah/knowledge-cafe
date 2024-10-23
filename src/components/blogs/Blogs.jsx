import React, { useEffect,useState } from 'react'
import Blog from '../blog/Blog';

export default function Blogs({handleAddToBookmarks,handleReadingTime}) {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div className='space-y-10 lg:w-2/3'>
        {
            blogs.map(blog=><Blog handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}/>)
        }
    </div>
  )
}


