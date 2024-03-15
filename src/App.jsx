import { useState } from 'react'
import './App.css'
import Header from './Component/header/Header'
import Blogs from './Component/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Header></Header>
<Blogs></Blogs>
    </>
  )
}

export default App
