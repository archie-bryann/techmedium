import React from 'react'

function About({imagesUrl}) {
    return (
       <section className = "about" id = "about">
           <h1 className="heading">about us</h1>
            <h3 className="title">start your journey with us</h3>

            <div className="row">

                <div className="content">
                    <h3>start your journey to a better life with our practical courses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus incidunt dolorum voluptas saepe, animi perspiciatis praesentium ipsa numquam et possimus dolorem enim similique, quod dicta necessitatibus ducimus officiis nemo!</p>
                    <a href="#"><button>learn more</button></a>
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
