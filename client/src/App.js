import './App.css';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Teacher from './components/Teacher/Teacher';
import Courses from './components/Courses/Courses';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Redirect, Route,Switch } from 'react-router-dom'
import courses from './data/courses_data'

function App() {

  const imagesUrl = "http://localhost:9000/";

  return (
   <Fragment>
     <Router>
      <ScrollToTop />
      <Switch>
        <Route path =  "/" exact = {true} component = {()=>(
          <Fragment>
              <Header />
              <Welcome imagesUrl = {imagesUrl} />
              <About imagesUrl = {imagesUrl} />
              <Teacher imagesUrl = {imagesUrl} />
              <Courses courses = {courses} limit = {6} />
              <Reviews imagesUrl = {imagesUrl} />
              <Contact imagesUrl = {imagesUrl} />
          </Fragment>
        )} />
        <Route path = "/courses" exact = {true} component = {()=>(
          <Fragment>
              <Header2 />
              <Courses courses = {courses} limit = {0} />
          </Fragment>
        )} />
      </Switch>
     </Router>
     
        <Footer />
   </Fragment>
  );
}

export default App;
