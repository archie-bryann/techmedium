import React, { useState, Fragment } from 'react'
import Loader from '../Loader/Loader'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

toast.configure();

function Contact({imagesUrl,serverUrl}) {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const errorMessage = "An error occured. Please try again!";
    
    
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

    function IsEmail(email) {
        if(email.includes("@")) {
            var array = email.split("@")
            var sub = array[1]
            if(sub.includes(".")) {
                return true // email
            } else {
                return false // not an email
            }
        } else {
            return false // not an email
        }
    }

    function submitMessage(e) {
        e.preventDefault();        
        if(fullname.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
            toast.error("All fields are required!", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: false
            }) 
        } else {
            const checker = IsEmail(email);
            if(checker === false) {
                toast.error("You used an invalid email!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: false
                }) 
            } else {
                setIsLoading(true);
                axios.post(`${serverUrl}support`, {
                    fullname,email,phone,message
                }).then(({data})=>{
                    setIsLoading(false);
                    if(data.error===0) {
                        toast.success("We just received your message. We will get back to you as soon as we can.", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            autoClose: false
                        })
                        setFullname('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                    } else {
                        toast.error(errorMessage, {
                            position: toast.POSITION.BOTTOM_RIGHT,
                            autoClose: false
                        })
                    }
                }).catch(err=>{
                    setIsLoading(false);
                    toast.error(errorMessage, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: false
                    }) 
                })    
            }
        }
    }

    return (
        <Fragment>
            {isLoading && <Loader />}
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
                    <input type="text" name = "phone" value = {phone} placeholder="Phone" onChange = {changePhone} />
                    <textarea name = "message" id="" cols="30" rows="10" placeholder="Message" onChange = {changeMessage}>{message}</textarea>
                    <input type="submit" value="message" onClick = {submitMessage} />
                </form>
            </div>
        
        </div>
        
        </section>
        </Fragment>

    )
}

export default Contact
