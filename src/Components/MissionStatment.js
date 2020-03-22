import React from 'react';
import Style from 'style-it';


class MissionStatment extends React.Component {
  render() {
    const fontSize = 20;

    return Style.it(`
      .logo {
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
      <p className="logo">Awareness leading to sustainable food choices which power a better future. </p>
  </div>
    );
  }
}

export default MissionStatment;
