import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'

function App() {

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
      <Courses></Courses>
      <Register></Register>
      </div>
      
    </>
  )
}

export default App
