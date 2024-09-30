import React from 'react';
import './index.css'
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';
import Education from './sections/education/Education';
import Reviews from './sections/reviews/Reviews';
import Contacts from './sections/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <MyServices/>
      <AboutMe/>
      <Education/>
      <Reviews/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
