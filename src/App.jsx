
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const[bookmarks , setBookmarkes] = useState([])
  const [readingTime , setReadingTime] = useState(0)

  const handleAddBookmarks = blog =>{
    // console.log(blog)
    const newBookmarks =[...bookmarks,blog]
    setBookmarkes(newBookmarks)
  }

  const hadleReadingTime = time =>{
    // console.log('mark as read',time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex  justify-center w-[80%] mx-auto' >
        <Blogs handleAddBookmarks={handleAddBookmarks}
        hadleReadingTime={hadleReadingTime}></Blogs>
        <Bookmarks  bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      
      </main>
      
      


    </>
  )
}

export default App
