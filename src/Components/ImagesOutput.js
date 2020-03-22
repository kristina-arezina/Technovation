import React from 'react';
import Header from "./Images/BottomImage.js";
import MiddleImage from "./Images/MiddleImage.js";
import TopImage from "./Images/TopImage.js";

function ImagesOutput() {
  const css = { margin: 5 }
  return (
  <div>
      <Header style={css}/>
      <MiddleImage style={css}/>
      <TopImage style={css}/>
    </div>
  );
}

export default ImagesOutput;
