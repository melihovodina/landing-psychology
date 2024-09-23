import React from 'react';
import './index.css'
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';
import Education from './sections/education/Education';
import Reviews from './sections/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Main/>
      <MyServices/>
      <AboutMe/>
      <Education/>
      <Reviews/>
    </div>
  );
}

export default App;
