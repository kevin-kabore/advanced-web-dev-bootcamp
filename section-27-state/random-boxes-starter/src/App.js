import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class App extends Component {

  constructor(props) {
    super(props);
    const randColor = () => props.allColors[Math.floor(Math.random() * this.props.allColors.length)];
    this.state = {
      boxes: [
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()},
        {color: randColor()}
      ]
    }

    setInterval(() => {
      const randBoxI = Math.floor(Math.random() * this.state.boxes.length)
      const randColorI = Math.floor(Math.random() * this.props.allColors.length)

      const boxes = this.state.boxes.map((box, i) => {
        if (i === randBoxI) {
          return {color: this.props.allColors[randColorI]}
        } else {
          return box;
        }
      })
      this.setState({boxes})

    }, 300)
  }
  render() {
    const boxes = this.state.boxes.map((b, i) => <Box key={i} color={b.color}/>)
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
