import React from 'react';
import './App.css';
import Name from "./Components/Care2Eat.js";
import ImagesOutput from "./Components/ImagesOutput.js"
import styled, { keyframes } from "styled-components";
import SlideInLeft from "@bit/formidablelabs.react-animations.slide-in-left";
import FadeInRight from "@bit/formidablelabs.react-animations.fade-in-right";




const FadeInRightAnimation = keyframes`${FadeInRight}`;
const FadeInRightDiv = styled.div`
  animation:  5s ${FadeInRightAnimation};
`;

const SlideInLeftAnimation = keyframes`${SlideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 5s ${SlideInLeftAnimation};
`;

function App() {
  return (
    <div className="App">

    <SlideInLeftDiv style={{zIndex:2, position: 'absolute'}}>
      <Name/>
    </SlideInLeftDiv>
    <FadeInRightDiv  style={{zIndex:1}}>
      <ImagesOutput />
    </FadeInRightDiv>



    </div>
  );
}

export default App;
