import React from 'react';
import BigPicture from "./Images/BottomImage.js";

function ImagesOutput() {

  const css = {
    visibility: "hidden",
      padding: 0,
      position: "relative",
      width: "25px",
      }

  const wraper = {
    position: "relative",
    width: "25px",
    top:"0px",
    left:"1220px",
  }

  return (
    <div style={wraper}>
      <BigPicture style={css}/>
    </div>
  );
}

export default ImagesOutput;
