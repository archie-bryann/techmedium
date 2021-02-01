import React from 'react'
import { Link } from 'react-router-dom'

function Welcome({imagesUrl}) {

    return (
            <section className="home" id = "home" style = {{background:'linear-gradient(rgba(0, 0, 0,.4),black), url(http://localhost:9000/636221660501932536-GettyImages-491632268.jpg) no-repeat center'}}>

                <div className="content">
                    <h1>learn anything from home</h1>
                    <p>"You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future." - Steve Jobs   </p>
                    {/* <p>With TechMedium, you gain the ability to learn anything you want from home. </p> */}

                    {/* <a href="#"><button>view courses</button></a> */}
                    <Link to = "/courses#course">
                        <button>enrol now</button>
                    </Link>
                </div>

                
                <div className="box-container">
                    
                    <Link to = "/courses#course">
                        <div className="box">
                            <i className="fas fa-graduation-cap"></i>
                            <h3>trending courses</h3>
                            <p>We have got the best courses which you can learn from</p>
                        </div>
                    </Link>

                    <a href = "https://docs.google.com/forms/d/e/1FAIpQLSeFkKbsE2k-8L4Ljl4-n2MrzLeCOYn5DFHMMvzOs_WPsR1JzA/viewform">
                        <div className="box">
                            <i className="fas fa-fire"></i>
                            <h3>free trial</h3>
                            <p>Still Doubting! The first classes are free. Click here to get started</p>
                        </div>
                    </a>

                    <Link to = "/courses#course?status=cert"> 
                    {/* title - TechMedium Certifications */}
                        <div className="box">
                            <i className="fas fa-award"></i>
                            <h3>certifications</h3>
                            <p>TechMedium' certificates prove fundamental knowledge of web development.</p>
                        </div>
                    </Link>
                </div>

    </section>
    )
}

export default Welcome
