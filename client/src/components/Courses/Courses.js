import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'

function Courses({courses, limit}) {


    const [c, setC] = useState(courses);

    function searchCourse(e) {
        const excludeColumns = [];
        const value = e.target.value;
        console.log(value)
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setC(courses);
        else {
            const filteredData = courses.filter(item => {
            return Object.keys(item).some(key =>
                excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
            });
            setC(filteredData);
        }
    }

    return (
        <section id="course" className="course">

        {(limit < 1) && (
            <div style = {{height:'50px'}}></div>
        )}

        <h1 className="heading" style = {{fontSize:'35px'}}>our courses/certificates</h1>
        <h3 className="title">upgrade your skills with newest courses</h3>
      
        {(limit < 1) && (
                <input className = "search-course" placeholder = "Search for a course" onChange = {searchCourse} />
        )}

        <div className="box-container">
            {
                (limit < 1) ? c.map(({id,icon,name,caption,description, redrUrl})=>{
                    return (

                        <Fragment key = {id}>

                            <div className = "box">
                                <i className = {icon}></i>
                                <h3>{name}</h3>
                                <p style = {{fontSize:'12px'}}>{caption}</p>
                                <Link to = {`/course/${slugify(name)}`}>
                                    <button className = "register">learn more</button>
                                </Link>
                            </div>

                        </Fragment>
                    )
                }) : c.slice(0,6).map(({id,icon,name,caption,description, redrUrl})=>{
                    return (
                        <Fragment key = {id}>
                            <div className = "box">
                                    <i className = {icon}></i>
                                    <h3>{name}</h3>
                                    <p style = {{fontSize:'12px'}}>{caption}</p>
                                    <Link to = {`/course/${slugify(name)}`}>
                                        <button className = "register">learn more</button>
                                    </Link>
                            </div>
                        </Fragment>
                        
                    )
                })
            }


{/* 
            <div className="box">
                <i className="fab fa-html5"></i>
                <h3>html5</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
                <button className = "register">See more</button>
            </div>

            <div className="box">
                <i className="fab fa-css3-alt"></i>
                <h3>css3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
                <button className = "register">See more</button>
            </div>

            <div className="box">
                <i className="fab fa-js-square"></i>
                <h3>javascript</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
                <button>See more</button>
            </div>

            <div className="box">
                <i className="fas fa-code"></i>
                <h3>web development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
                <button>See more</button>
            </div>

            <div className="box">
                <i className="fas fa-bullhorn"></i>
                <h3>seo marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>
                <button>See more</button>
            </div>

            <div className="box">
                <i className="fas fa-paint-brush"></i>
                <h3>graphic design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ex.</p>        
                <button>See more</button>
            </div> */}


        </div>  
        {(limit > 1) && (
            // link /courses#courses
            <Link to = "/courses#course">
                <button className = "see-more">view all courses</button>
            </Link>
        )}


        </section>

    )
}

export default Courses
