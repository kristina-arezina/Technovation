import React from 'react';
import './App.css';
import TextInANest from "./Components/Care2Eat.js";
import Logo from "./Components/Logo.js";
import MissionStatment from "./Components/MissionStatment.js";
import AppLink from "./Components/AppLink.js";
import ImagesOutput from "./Components/ImagesOutput.js"



function App() {
  return (
    <div className="App">

      <TextInANest/>
      <Logo/>
      <MissionStatment/>
      <AppLink/>
    <ImagesOutput/>
    </div>
  );
}

export default App;
