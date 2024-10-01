import React from 'react';
import './index.css';
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
      <section id="main">
        <Main />
      </section>
      <section id="services">
        <MyServices />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;