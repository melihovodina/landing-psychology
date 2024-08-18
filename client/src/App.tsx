import React from 'react';
import './index.css'
import Main from './sections/main/Main';
import MyServices from './sections/myServices/MyServices';
import AboutMe from './sections/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Main/>
      <MyServices/>
      <AboutMe/>
    </div>
  );
}

export default App;
