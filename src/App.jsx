import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleAddToRegister = course =>{
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex mx-4 bg-slate-200'>
            <Courses handleAddToRegister={handleAddToRegister}></Courses>
            <Register selectedCourses={selectedCourses}></Register>
      </div>
      
    </>
  )
}

export default App
