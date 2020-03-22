import React from 'react';
import bigpicture from './bigpicture.png';


console.log(bigpicture); // /logo.84287d09.png
function BigPicture() {
  // Import result is the URL of your image
  return <img src={bigpicture} alt="bigpicture" />;
}
export default BigPicture;
