import './App.css';
import React, { Component } from 'react'
import {Howl, Howler} from 'howler';
import kick17 from './sounds/kick17.wav';
import snare14 from './sounds/snare14.wav';
import hihat3 from './sounds/hihat3.wav';

const samples = [
  {key: "Q", sound: kick17, label:"Kick"},
  {key: "W", sound: snare14, label:"Snare"}, 
  {key: "E",sound: hihat3, label:"Hi-hat"},
]

class App extends Component {
  
  // Creates a button for each sample
  renderbuttons = () => {
    return samples.map((soundObj, i) => {
      return (
        <div>
          <button key={i} onClick={()=> this.playsound(soundObj.sound)}>
            {soundObj.label}
          </button>
        </div>
      ) 
    })
  }

  // Plays samples
  playsound = (src) => {
    const sound = new Howl({
      src
    });
    sound.play()
  }

  // Listen for key press
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  existsInObj = (key, obj) => {
    // Looks for key in given array
    let isFound = false

    Object.values(obj).forEach(row => {
      // Return true if found
      if (key === row.key) {
        isFound = true
       }
    });
    // Return false if not found
    return isFound
  };

  handleKeyPress = (event) => {
    // Make key pressed uppercase
    const keyPressed = event.key.toUpperCase()
    console.log(keyPressed + " pressed")
    
    if (this.existsInObj(keyPressed, samples)) {
      console.log("Found")
    }
    
    // Play sound if key pressed in array
      
      
  }

  // Render app
  render() {
     
    return (
      <div className="App">
        <div>
          {this.renderbuttons()}
        </div>        
      </div>
    );
  }
  
}

// TODO: Get key pressed

// TODO: Create full drum kit - Separate into different file

// TODO: Switch drum kit

export default App;
