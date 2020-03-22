import React from 'react';
import BigPicture from "./Images/BottomImage.js";

function ImagesOutput() {

  const css = {
    visibility: "hidden",
      padding: 0,
      position: "relative",
      width: "25px",
      position: 'absolute'
      }

  const wraper = {
    position: "relative",
    width: "25px",
    top:"0px",
    left:"1220px",
    position: 'absolute'
  }

  return (
    <div style={wraper}>
      <BigPicture style={css}/>
    </div>
  );
}

export default ImagesOutput;
