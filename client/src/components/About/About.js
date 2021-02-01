import { Link } from 'react-router-dom'
import React from 'react'

function About({imagesUrl}) {
    return (
       <section className = "about" id = "about">
           <h1 className="heading">about us</h1>
            <h3 className="title">start your journey with us</h3>

            <div className="row">

                <div className="content">
                    <h3>start your journey to a better life with our practical courses</h3>
                    <p>TechMedium is a leading tech education company, created and started by an IT enthusiast in 2020. 2x Award-winning courses (Best Online Coding Bootcamp winner 2020). We have the vision to be the leaders in the IT training Industry, in Nigeria and Internationally.</p>
                    <Link to = "/courses#course"><a><button>Start Learning</button></a></Link>

                </div>

                <div className="image">
                    <img src={`${imagesUrl}Learning languages-cuate (2).svg`} alt="" />
                    <p><small><a style = {{color:'black',float:'right',fontSize:'4px'}} href="https://storyset.com/people">Illustration by Freepik Storyset</a></small></p>
                </div>

            </div>
       </section>
    )
}

export default About
