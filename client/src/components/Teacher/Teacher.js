import React from 'react'

function Teacher({imagesUrl}) {
    return (
        <section id="teacher" className="teacher">

        <h1 className="heading">our teachers</h1>
        <h3 className="title">meet professional trainers</h3>
        
        <div className="card-container">
        
            <div className="card">
                <img src={`${imagesUrl}pic1.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>i love teaching</p>
                <div className="icons">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-github"></a>
                </div>
            </div>
        
            <div className="card">
                <img src={`${imagesUrl}pic2.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>i love teaching</p>
                <div className="icons">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-github"></a>
                </div>
            </div>
        
            <div className="card">
                <img src={`${imagesUrl}pic3.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>i love teaching</p>
                <div className="icons">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-github"></a>
                </div>
            </div>
        
            <div className="card">
                <img src={`${imagesUrl}pic4.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>i love teaching</p>
                <div className="icons">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-github"></a>
                </div>
            </div>
        
        </div>
        
        
        </section>
    )
}

export default Teacher
