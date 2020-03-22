import React from 'react';
import lastBigPicture from './lastBigPicture.png';


console.log(lastBigPicture); // /logo.84287d09.png
function LastBigPicture() {
  // Import result is the URL of your image
  return <img src={lastBigPicture} alt="LastBigPicture" />;
}
export default LastBigPicture;
