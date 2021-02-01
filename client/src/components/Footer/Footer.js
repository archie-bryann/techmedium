import React from 'react'
import moment from 'moment'

function Footer() {
    return (
        <section className="footer">

            <div className="icons">
                {/* <a href="" target = "_blank" className="fab fa-facebook-f"></a> */}
                <a href="https://www.instagram.com/techmedium.com.ng/" className="fab fa-instagram"></a>
                <a href="https://twitter.com/techmediumng" className="fab fa-twitter"></a>
                <a href="https://github.com/techmedium" className="fab fa-github"></a>
                {/* <a href="#" className="fab fa-pinterest"></a> */}
            </div>

            <div className="credit">Copyright {moment().format('YYYY')} - <span>TechMedium</span> | all rights reserved.</div>

        </section>
    )
}

export default Footer
