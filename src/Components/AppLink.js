import React from 'react';
import Style from 'style-it';


class AppLink extends React.Component {
  render() {
    const fontSize = 15;

    return Style.it(`
      .AppLink {
        font-size: ${ fontSize }px;  // ES2015 & ES6 Template Literal string interpolation
         font-family: 'Source Sans Pro', sans-serif;
         padding-left:150px;
         font-weight: 100;
         color: #6b9b6d;
      }
      .package {
        color: blue;
      }
      .package:hover {
        color: aqua;
      }
    `,
<div>
      <p className="AppLink">TheurloftheappstoreofCare2Eat.com </p>
  </div>
    );
  }
}

export default AppLink;
