import React from 'react';
import Header from "./Images/BottomImage.js";
import MiddleImage from "./Images/MiddleImage.js";
import TopImage from "./Images/TopImage.js";

function ImagesOutput() {
  const css = {
    visibility: "hidden",
      padding: 0,
      paddingTop: "10px",
      display: "block",
      width: "25px",
      height: "4px"}

  const wraper = { display: "block",
    position: "relative",
    width: "25px",
    top:"800px",
  left:"1175px"}
  return (
  <div style={wraper}>
  <TopImage style={css}/>
  <MiddleImage style={css}/>
      <Header style={css}/>


    </div>
  );
}

export default ImagesOutput;
