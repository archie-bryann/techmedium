import React from 'react'

function Reviews({imagesUrl}) {
    return (
        <section id="review" className="review">

        <h1 className="heading">students review</h1>
        <h3 className="title">what our students says about us</h3>

        <div className="box-container">

            <div className="box">
                <img src={`${imagesUrl}pic1.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>

            <div className="box">
                <img src={`${imagesUrl}pic2.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>

            <div className="box">
                <img src={`${imagesUrl}pic3.jpg`} alt="" />
                <h3>someone's name</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, corporis?</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

        </div>

        </section>
    )
}

export default Reviews
