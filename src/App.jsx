import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToRegister = course =>{
    const isExist = selectedCourses.find((item) => item.id == course.id);

    let totalCreditHour = course.credit;
    let totalPrice = course.price;

    if(isExist){
      return alert('Already registered');
    }else{
      selectedCourses.forEach(item => {
        totalCreditHour = totalCreditHour + item.credit;
        totalPrice = totalPrice + item.price;
      });
      const remainingCreditHour = 20 - totalCreditHour;

      if(totalCreditHour > 20){
        alert('wait for next semester')
      }else{
        setRemainingCreditHour(remainingCreditHour);
        setTotalCreditHour(totalCreditHour);
        setTotalPrice(totalPrice);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex mx-4 bg-slate-200'>
            <Courses handleAddToRegister={handleAddToRegister}></Courses>
            <Register selectedCourses={selectedCourses}
                      totalCreditHour={totalCreditHour}
                      remainingCreditHour={remainingCreditHour}
                      totalPrice={totalPrice}
            ></Register>
      </div>
      
    </>
  )
}

export default App
