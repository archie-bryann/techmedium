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
                <br />
                <b>How would you rate the course?</b>
                <p>'10/10'</p>
                <br />
                <b>Did you gain knowledge?</b>
                <p>'Absolutely I learnt alot'</p>
                <br />
                <b>How would you rate the lecturer?</b>
                <p>'Andre is friendly and knowledgeable.'</p>
                <br />
                <b>Overall experience?</b>
                <p>'Fantastic Experience'</p>

                <br />
                <b>JAVA PROGRAMMING COURSE</b>
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
                <br />
                <b>How would you rate the course?</b>
                <p>'10 out of 10 for Joel.'</p>
                <br />
                <b>Did you gain knowledge?</b>
                <p>'A lot of knowledge that I gained!!'</p>
                <br />
                <b>How would you rate the lecturer?</b>
                <p>'10 out of 10.'</p>
                <br />
                <b>Overall experience?</b>
                <p>'It was an awesome experience.'</p>
                <br />
                <b>PYTHON PROGRAMMING COURSE</b>
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
                <br />
                <b>How would you rate the course?</b>
                <p>'Excellent learning Experience.'</p>
                <br />

                <b>Did you gain knowledge?</b>
                <p>'I learned a lot.'</p>
                <br />
                <b>How would you rate the lecturer?</b>
                <p>'Joel is (TBE) The Best Ever.'</p>
                <br />
                <b>Overall experience?</b>
                <p>'Great 120hrs of learning.'</p>

                <br />
                <b>PYTHON PROGRAMMING COURSE</b>

                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="box">
                <img src={`${imagesUrl}pic3.jpg`} alt="" />
                <h3>someone's name</h3>
                <br />
                <b>How would you rate the course?</b>
                <p>'10/10'</p>
                <br />

                <b>Did you gain knowledge?</b>
                <p>'Most definitely, I learned a lot. I can not wait to do my next course.'</p>
                <br />
                <b>How would you rate the lecturer?</b>
                <p>'10/10 He was very patient and accommodating. He is a very good lecturer and I learned a lot from him'</p>
                <br />
                <b>Overall experience?</b>
                <p>'It was a great experience, School of IT made it fun.'</p>

                <br />
                <b>JAVA PROGRAMMING COURSE</b>

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
