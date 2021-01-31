import React from 'react'
import { Link } from 'react-router-dom'

function Welcome({imagesUrl}) {

    return (
            <section className="home" id = "home" style = {{background:'linear-gradient(rgba(0, 0, 0,.4),black), url(http://localhost:9000/bg.jpg) no-repeat'}}>

                <div className="content">
                    <h1>learn online form home</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum accusantium dolore esse error facere totam eveniet dicta molestiae ea?</p>

                    {/* <a href="#"><button>view courses</button></a> */}
                    <Link to = "/courses#course">
                        <button>view courses</button>
                    </Link>
                </div>

                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <h3>trending courses</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-fire"></i>
                        <h3>free trial</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-award"></i>
                        <h3>certifications</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sit!</p>
                    </div>

                </div>

    </section>
    )
}

export default Welcome
