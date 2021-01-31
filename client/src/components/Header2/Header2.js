import React, { useEffect, useState, useRef } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Title from '../Title/Title';


function Header() {

    const [x, setX] = useState(null);
    const [n, setN] = useState(null);
    const [h, setH] = useState(null);
    // link classes state
    const [homeClass, setHomeClass] = useState(null);
    const [aboutClass, setAboutClass] = useState(null);
    const [teacherClass, setTeacherClass] = useState(null);
    const [courseClass, setCourseClass] = useState(null);
    const [reviewClass, setReviewClass] = useState(null);
    const [contactClass, setContactClass] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])


    function toggleNavigation() {
        x ? setX(null) : setX('fa-times');
        n ? setN(null) : setN('nav-toggle');
    }

    function handleScroll() {
        setX(null);
        setN(null);
        if(window.pageYOffset > 30) {
            setH('header-active');
        } else {
            setH(null);
        }

        // change colour
        $('section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
              // $('.navbar ul li a').removeClass('active');
              // $('.navbar').find('[href="#' + id + '"]').addClass('active');
              if(id == 'home') {
                  setHomeClass('active');
                  setAboutClass(null);
                  setTeacherClass(null);
                  setCourseClass(null);
                  setReviewClass(null);
                  setContactClass(null);
              } else if(id == "about") {
                  setHomeClass(null);
                  setAboutClass('active');
                  setTeacherClass(null);
                  setCourseClass(null);
                  setReviewClass(null);
                  setContactClass(null);
              } else if(id == "teacher") {
                  setHomeClass(null);
                  setAboutClass(null);
                  setTeacherClass('active');
                  setCourseClass(null);
                  setReviewClass(null);
                  setContactClass(null);
              } else if(id == "course") {
                  setHomeClass(null);
                  setAboutClass(null);
                  setTeacherClass(null);
                  setCourseClass('active');
                  setReviewClass(null);
                  setContactClass(null);
              } else if(id == "review") {
                  setHomeClass(null);
                  setAboutClass(null);
                  setTeacherClass(null);
                  setCourseClass(null);
                  setReviewClass('active');
                  setContactClass(null);
              } else if(id = "contact") {
                  setHomeClass(null);
                  setAboutClass(null);
                  setTeacherClass(null);
                  setCourseClass(null);
                  setReviewClass(null);
                  setContactClass('active');
              }
            }
          });
    }

    // functions for changing colours

    function setHome() {
        setHomeClass('active');
        setAboutClass(null);
        setTeacherClass(null);
        setCourseClass(null);
        setReviewClass(null);
        setContactClass(null);
    }
  
    function setAbout() {
        setHomeClass(null);
        setAboutClass('active');
        setTeacherClass(null);
        setCourseClass(null);
        setReviewClass(null);
        setContactClass(null);
    }
  
    function setTeacher() {
        setHomeClass(null);
        setAboutClass(null);
        setTeacherClass('active');
        setCourseClass(null);
        setReviewClass(null);
        setContactClass(null);
    }
  
    function setCourse() {
        setHomeClass(null);
        setAboutClass(null);
        setTeacherClass(null);
        setCourseClass('active');
        setReviewClass(null);
        setContactClass(null);
    }
  
    function setReview() {
        setHomeClass(null);
        setAboutClass(null);
        setTeacherClass(null);
        setCourseClass(null);
        setReviewClass('active');
        setContactClass(null);
    }
  
    function setContact() {
        setHomeClass(null);
        setAboutClass(null);
        setTeacherClass(null);
        setCourseClass(null);
        setReviewClass(null);
        setContactClass('active');
    }

    return (
        <header className = {`${h}`}>
            <Title />

            <nav className={`navbar ${n}`}>
                <ul>
                    <li><Link to = "/"><a onClick = {setHome} className = {homeClass}>Back To Home</a></Link></li>
                    {/* <li><a href="#about" onClick = {setAbout} className = {aboutClass}>about</a></li> */}
                    {/* <li><a href="#teacher" onClick = {setTeacher} className = {teacherClass}>teacher</a></li> */}
                    <li><a href="#course" onClick = {setCourse} className = {courseClass}>courses</a></li>
                    {/* <li><a href="#review" onClick = {setReview} className = {reviewClass}>review</a></li>
                    <li><a href="#contact" onClick = {setContact} className = {contactClass}>contact</a></li> */}
                </ul>
            </nav>

            <div className = {`fas fa-bars ${x}`} onClick = {toggleNavigation}></div>
        </header>
    )
}

export default Header
