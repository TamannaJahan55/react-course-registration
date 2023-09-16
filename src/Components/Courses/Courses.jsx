import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToRegister}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (

        <div className="mx-5 my-5 grid grid-cols-1 gap-3 md:grid md:grid-cols-2 md:gap-4 lg:w-3/4 lg:grid lg:grid-cols-3 lg:gap-7">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleAddToRegister={handleAddToRegister}
                    ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToRegister: PropTypes.func
}

export default Courses;