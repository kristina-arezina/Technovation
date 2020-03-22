import React from 'react';
import middleImage from './middle.png';


console.log(middleImage); // /logo.84287d09.png
function MiddleImage() {
  // Import result is the URL of your image
  return <img src={middleImage} alt="middleImage" />;
}
export default MiddleImage;
