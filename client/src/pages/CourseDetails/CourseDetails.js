import React, { useEffect, useState } from 'react'
import slugify from 'react-slugify'

function CourseDetails({match, courses}) {

    const [course, setCourse] = useState([]);

    const course_slug = match.params.course;
    
    function isSame({name}) {
        return slugify(name)===slugify(course_slug);
    }

    useEffect(() => {
        courses.filter(isSame).map(c=>{
            setCourse(c)
        })
    }, [course_slug])


    return (
       <section id = "course" className = "course">
           <div style = {{height:'50px'}}></div>

           <h2 className="heading">{course.name}</h2>
           <h3 className="title">{course.full}</h3>

       </section>
    )
}

export default CourseDetails
