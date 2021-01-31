import React from 'react'

function Contact({imagesUrl}) {
    return (
        <section className="contact" id="contact">

        <h1 className="heading" style = {{color:'white'}}>contact us</h1>
        <h3 className="title">we love conversations, lets talk.</h3>
        
        <div className="row">
        
            <div className="image">
                <img src={`${imagesUrl}Email campaign-cuate.svg`} alt="" />
                <p><small><a style = {{color:'black',fontSize:'4px'}} href="https://storyset.com/marketing">Illustration by Freepik Storyset</a></small></p>
            </div>
        
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Enter your email" />
                    <input type="number" placeholder="Phone" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="message" />
                </form>
            </div>
        
        </div>
        
        </section>
    )
}

export default Contact
