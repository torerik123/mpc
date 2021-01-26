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


  playsound = (src) => {
    // Play samples
    
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
    // Checks if key exists in an object
    
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
    // Get key pressed and play corresponding sound
    
    // Make key pressed uppercase
    const keyPressed = event.key.toUpperCase()
    
    // Check if key pressed exists in samples
    if (this.existsInObj(keyPressed, samples)) {
      
      // Play corresponding sound
      samples.forEach(element => {
        if (element.key === keyPressed) {
          this.playsound(element.sound)
        }
      });
    };      
  };


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

// TODO: Create full drum kit - Separate into different file

// TODO: Switch drum kit

// TODO: CSS

export default App;
