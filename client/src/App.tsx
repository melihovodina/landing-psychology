import React, { useEffect, useState } from 'react';
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';
import Education from './sections/education/Education';
import Reviews from './sections/reviews/Reviews';
import Contacts from './sections/contacts/Contacts';
import Footer from './components/footer/Footer';
import { CgSpinner } from 'react-icons/cg';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleLoad = () => {
      setLoading(false);
    };

    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    const onImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad);
      }
    });
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      images.forEach(img => img.removeEventListener('load', onImageLoad));
    };
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className='App-preloader'>
          <CgSpinner className="App-spinner" size={64} />
        </div>
      )}
      <div className='App-main' style={{ display: loading ? 'none' : 'block' }}> 
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
    </div>
  );
}

export default App;