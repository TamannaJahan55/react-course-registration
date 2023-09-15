import PropTypes from 'prop-types';

const Register = ({selectedCourses, remainingCreditHour, totalCreditHour}) => {
    return (
        <div className="md:w-1/4 my-5 mr-4">
            <div className='bg-white p-4'>
            <h2 className='text-lg, font-bold, text-blue-600 mb-4'>Credit Hour Remaining {remainingCreditHour} hr</h2>
            <hr />
            <h2 className='text-xl font-bold mb-4'>Course Name</h2>
            {
                selectedCourses.map(course => (
                <li className='list-none text-base font-normal text-gray-500 mb-2' key={course.id}>{course.id}. {course.course_name}</li>))
            }
            <hr />
            <h2 className='text-base, font-medium, text-gray-500, mt-4'>Total Credit Hour: {totalCreditHour}</h2>
            </div>
        </div>
    );
};

Register.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    remainingCreditHour: PropTypes.number,
    totalCreditHour: PropTypes.number
}

export default Register;