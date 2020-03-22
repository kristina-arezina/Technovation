import React from 'react';
import topImage from './top.png';


console.log(topImage); // /logo.84287d09.png
function TopImage() {
  // Import result is the URL of your image
  return <img src={topImage} alt="topImage" />;
}
export default TopImage;
