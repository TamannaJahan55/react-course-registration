import PropTypes from 'prop-types';
import { FiBookOpen } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({course, handleAddToRegister}) => {
    const {course_name, course_img, course_details, price, credit} = course;
    return (
            <div className='w-72 h-full p-2 rounded-xl bg-white'>
            <img className='w-full' src={course_img} alt={`Image of the course ${course_name}`} />
            <h2 className='text-lg font-semibold text-left mt-4'>{course_name}</h2>
            <p className='text-sm font-normal text-left text-gray-600 mt-2'>{course_details}</p>
            <div className='flex justify-between mt-5'>
                <div className='flex gap-2'>
                    <button><FiDollarSign></FiDollarSign></button>
                    <p>Price: {price}</p>
                </div>
                <div className='flex gap-2'>
                    <button><FiBookOpen></FiBookOpen></button>
                    <span>Credit: {credit}hr</span>
                </div>
            </div>
            <button onClick={() =>handleAddToRegister(course)} className='w-full px-5 py-3 bg-blue-600 text-white text-center mt-5 rounded-xl'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToRegister: PropTypes.func
}

export default Course;