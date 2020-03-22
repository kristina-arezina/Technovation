import React from 'react';
import BigPicture2 from "./Images/BottomImage.js";

function ImagesOutput() {

  const css = {
    visibility: "hidden",
      position: "fixed",

      }

  const wraper = {
    position: "fixed",
    width: "30%",
    top: 0,
left: 0,
  }

  return (
    <div style={wraper}>
      <BigPicture2 style={css}/>
    </div>
  );
}

export default ImagesOutput;
