import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Courses({courses, limit}) {


    return (
        <section id="course" className="course">

        {(limit < 1) && (
            <div style = {{height:'50px'}}></div>
        )}

        <h1 className="heading">our courses</h1>
        <h3 className="title">upgrade your skills with newest courses</h3>


      
        {(limit < 1) && (
                <input className = "search-course" placeholder = "Search for a course" />
        )}

        <div className="box-container">

            {
                (limit < 1) ? courses.map(({icon,name,caption,description, redrUrl})=>{
                    return (

                        <Fragment>


                            <div className = "box">
                                <i className = {icon}></i>
                                <h3>{name}</h3>
                                <p>{caption}</p>
                                <button className = "register">Register</button>
                            </div>

                        </Fragment>
                    )
                }) : courses.slice(0,6).map(({icon,name,caption,description, redrUrl})=>{
                    return (
                        <div className = "box">
                            <i className = {icon}></i>
                            <h3>{name}</h3>
                            <p>{caption}</p>
                            <button className = "register">Register</button>
                        </div>
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
            <Link to = "/courses#courses">
                <button className = "see-more">view all courses</button>
            </Link>
        )}


        </section>

    )
}

export default Courses
