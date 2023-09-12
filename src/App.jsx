
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const[bookmarks , setBookmarkes] = useState([])

  const handleAddBookmarks = blog =>{
    // console.log(blog)
    const newBookmarks =[...bookmarks,blog]
    setBookmarkes(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex  justify-center w-[80%] mx-auto' >
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      
      </main>
      
      


    </>
  )
}

export default App
