import PropTypes from 'prop-types';

const Register = ({selectedCourses}) => {
    return (
        <div className="md:w-1/4 my-5 mr-4">
            <div className='bg-white p-4'>
            <h2 className='text-xl font-bold mb-4'>Course Name</h2>
            {
                selectedCourses.map(course => (
                <li className='list-none text-base font-normal text-gray-500 mb-2' key={course.id}>{course.id}. {course.course_name}</li>))
            }
            </div>
        </div>
    );
};

Register.propTypes = {
    selectedCourses: PropTypes.array
}

export default Register;