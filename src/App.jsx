import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToRegister = course =>{
    const isExist = selectedCourses.find((item) => item.id == course.id);

    let totalCreditHour = course.credit;
    let remainingCreditHour = 20 - course.credit;
    let totalPrice = course.price;

    if(isExist){
      toast.warn('Already registered',{
        position: 'top-center',
        theme: 'colored'
      });
    }else{
      selectedCourses.forEach(item => {
        totalCreditHour = totalCreditHour + item.credit;
        remainingCreditHour = remainingCreditHour - item.credit;
        totalPrice = totalPrice + item.price;
      });

      if(totalCreditHour > 20){
        toast.info('Total credit hour limit is 20',{
          position: 'top-right',
          theme: 'colored'
        });
      }else{
        setTotalCreditHour(totalCreditHour);
        setRemainingCreditHour(remainingCreditHour);
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
            <ToastContainer />
      </div>
      
    </>
  )
}

export default App
