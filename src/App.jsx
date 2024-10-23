import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
 function handleAddToBookmarks(blog){
  setBookmarks([...bookmarks,blog]);
 }
  const [readingtime,setReadingtime] = useState(0);
 function handleReadingTime(time,id){
  setReadingtime(readingtime+time);
  setBookmarks(bookmarks.filter(bookmark=> bookmark.id !== id));
 }
  return (
    <div>
    <Header/>
    <main className='lg:flex mt-14 gap-8 container mx-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleAddToBookmarks={handleAddToBookmarks}/>
      <div className='lg:w-1/3'>
      <div className='rounded-lg border p-6 border-[#6047EC] bg-[#6047EC]/10 mb-4 text-center'>
        <h2 className='font-bold text-2xl text-[#6047EC]'>Spent Time On Read: {readingtime} min</h2>
      </div>
      <Bookmarks bookmarks={bookmarks}/>
      </div>
    </main>
    </div>
  )
}

export default App
