import React from 'react';
import './index.css'
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';
import Education from './sections/education/Education';

function App() {
  return (
    <div className="App">
      <Main/>
      <MyServices/>
      <AboutMe/>
      <Education/>
    </div>
  );
}

export default App;
