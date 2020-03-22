import React from 'react';
import bottomImage from './bottom.png';


console.log(bottomImage); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={bottomImage} alt="bottomImage" />;
}
export default Header;
