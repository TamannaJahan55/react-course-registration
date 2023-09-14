import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <div className="md:w-3/4">
            <h1 className="text-4xl">Courses: {courses.length}</h1>
        </div>
    );
};

export default Courses;