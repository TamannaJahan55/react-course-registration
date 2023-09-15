import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'

function App() {

  return (
    <>
      
      <Header></Header>
      <div className='md:flex mx-4 gap-3 bg-slate-200'>
            <Courses></Courses>
            <Register></Register>
      </div>
      
    </>
  )
}

export default App
