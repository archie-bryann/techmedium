import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Title() {
    return (
        <Fragment>
            <Link to = "/">
                <a className="logo"><i className="fas fa-graduation-cap"></i>TechMedium</a>
            </Link>
        </Fragment>
    )
}

export default Title
