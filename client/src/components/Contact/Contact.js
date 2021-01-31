import React, { useState } from 'react'

function Contact({imagesUrl}) {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    function changeFullname(e) {
        setFullname(e.target.value);
    }

    function changeEmail(e) {   
        setEmail(e.target.value);
    }

    function changePhone(e) {
        setPhone(e.target.value);
    }

    function changeMessage(e) {
        setMessage(e.target.value);
    }

    function submitMessage(e) {
        e.preventDefault();
    }

    return (
        <section className="contact" id="contact">

        <h1 className="heading" style = {{color:'white'}}>contact us</h1>
        <h3 className="title">We'll get back to you via email in minutes</h3>
        
        <div className="row">
            <div className="image">
                <img src={`${imagesUrl}Email campaign-cuate.svg`} alt="" />
                <p><small><a style = {{color:'black',fontSize:'4px'}} href="https://storyset.com/marketing">Illustration by Freepik Storyset</a></small></p>
            </div>

            <div className="form-container">
                <form action="">
                    <input type="text" name = "fullname" value = {fullname} placeholder="Full name" onChange = {changeFullname} />
                    <input type="email" name = "email" value = {email} placeholder="Enter your email" onChange = {changeEmail} />
                    <input type="number" name = "phone" value = {phone} placeholder="Phone" onChange = {changePhone} />
                    <textarea name = "message" id="" cols="30" rows="10" placeholder="Message" onChange = {changeMessage}>{message}</textarea>
                    <input type="submit" value="message" onClick = {submitMessage} />
                </form>
            </div>
        
        </div>
        
        </section>
    )
}

export default Contact
