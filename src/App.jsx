import { useState } from 'react'
import './App.css'
import Header from './Component/header/Header'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/Bookmarks/BookMarks'

function App() {
  const [bookmark, setBookmarks] = useState([])

const handleAddToBookMark =blog =>{
  const newbookmark= [...bookmark,blog];
  setBookmarks(newbookmark)
}




  return (
    <>

<Header></Header>
<div className='md:flex max-w-7xl mx-auto'>
<Blogs
handleAddToBookMark={handleAddToBookMark}
></Blogs>
<BookMarks bookmark={bookmark} ></BookMarks>
</div>
    </>
  )
}

export default App
