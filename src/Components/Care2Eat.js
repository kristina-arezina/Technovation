import React from 'react';
import Style from 'style-it';

class Intro extends React.Component {
  render() {
    const fontSize = 90;

    return Style.it(`
      .intro {
        font-size: ${ fontSize }px;  // ES2015 & ES6 Template Literal string interpolation
         font-family: 'Oswald', sans-serif;
         padding-left:140px;
         font-weight: 900;
      }
      .package {
        color: blue;
      }
      .package:hover {
        color: aqua;
      }
    `,
      <p className="intro">CARE2EAT</p>
    );
  }
}

export default Intro;
