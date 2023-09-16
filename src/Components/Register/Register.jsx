import PropTypes from 'prop-types';

const Register = ({selectedCourses, remainingCreditHour, totalCreditHour, totalPrice}) => {
    return (

        <div className="my-5 w-72 ml-8 md:w-72 md:ml-52 lg:w-1/4 lg:ml-1 lg:mr-4">
            <div className='bg-white p-4'>
            <h2 className='text-lg font-bold text-blue-600 mb-4'>Credit Hour Remaining {remainingCreditHour} hr</h2>
            <hr />
            <h2 className='text-xl font-bold mt-3 mb-3'>Course Name</h2>
            {
                selectedCourses.map(course => (
                <li className='list-none text-base font-normal text-gray-500 mb-2' key={course.id}>{course.id}. {course.course_name}</li>))
            }
            <hr />
            <h2 className='text-base font-medium text-gray-700 mt-3 mb-3'>Total Credit Hour: {totalCreditHour}</h2>
            <hr />
            <h2 className='text-base font-medium text-gray-700 mt-3 mb-3'>Total Price: {totalPrice} USD</h2>
            </div>
        </div>
    );
};

Register.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    remainingCreditHour: PropTypes.number,
    totalCreditHour: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Register;