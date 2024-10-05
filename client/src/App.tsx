import React, { useEffect, useState } from 'react';
import './index.css';
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';
import Education from './sections/education/Education';
import Reviews from './sections/reviews/Reviews';
import Contacts from './sections/contacts/Contacts';
import Footer from './components/footer/Footer';
import { CgSpinner } from 'react-icons/cg';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className='App-preloader'>
          <CgSpinner className="App-spinner" size={64}/>
        </div>
      ) : (
        <div className='App-main'> 
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
      )}
    </div>
  );
}

export default App;