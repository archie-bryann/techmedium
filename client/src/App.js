import './App.css';
import { Fragment, useEffect } from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Teacher from './components/Teacher/Teacher';
import Courses from './components/Courses/Courses';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const imagesUrl = "http://localhost:9000/";

  return (
   <Fragment>
      <Header />
        <Welcome imagesUrl = {imagesUrl} />
        <About imagesUrl = {imagesUrl} />
        <Teacher imagesUrl = {imagesUrl} />
        <Courses />
        <Reviews imagesUrl = {imagesUrl} />
        <Contact imagesUrl = {imagesUrl} />
        <Footer />
   </Fragment>
  );
}

export default App;
