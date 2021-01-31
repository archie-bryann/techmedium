import React, { useEffect, useState } from 'react'
import slugify from 'react-slugify'
// import renderHTML from 'react-render-html';
// import parse from 'html-react-parser';

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
       <section id = "teacher" className = "teacher">
           <div style = {{height:'50px'}}></div>

           <h2 className="heading">{course.name}</h2>
           <h3 className="title">{course.full}</h3>

            <div style = {{height:'20px'}}></div>

            <div className = "container">
                <div className = "videoWrapper" dangerouslySetInnerHTML={{__html: course.video}} /> 

                <p className =  "description" dangerouslySetInnerHTML={{__html: course.description}} />

            </div>

            <br />
            <br />

            <a href = {course.payUrl}>
                <button className = "see-more" style = {{width:'80%', height:'4.5rem',fontSize:'17px',paddingTop:'1rem'}}>register for this course (₦{Number(course.fee).toLocaleString(undefined, {maximumFractionDigits:2})})</button>
            </a>
            <div style = {{height:'20px'}}></div>
       </section>
    )
}

export default CourseDetails
