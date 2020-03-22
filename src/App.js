import React from 'react';
import './App.css';
import TextInANest from "./Components/Care2Eat.js";
import Logo from "./Components/Logo.js";
import MissionStatment from "./Components/MissionStatment.js";
import AppLink from "./Components/AppLink.js";
import ImagesOutput from "./Components/ImagesOutput.js"
import styled, { keyframes } from "styled-components";
import SlideInLeft from "@bit/formidablelabs.react-animations.slide-in-left";
const SlideInLeftAnimation = keyframes`${SlideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 5s ${SlideInLeftAnimation};
`;


function App() {
  return (
    <div className="App">
    <SlideInLeftDiv>
      <ImagesOutput />
    </SlideInLeftDiv>
      <TextInANest/>
      <Logo/>
      <MissionStatment/>
      <AppLink/>
    </div>
  );
}

export default App;
