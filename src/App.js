import './App.css';
import React, { Component } from 'react'
import {Howl, Howler} from 'howler';
import oldskool_hat1 from './sounds/oldskool/oldskool_hat1.wav';
import oldskool_hat2 from './sounds/oldskool/oldskool_hat2.wav';
import oldskool_kick1 from './sounds/oldskool/oldskool_kick1.wav';
import oldskool_kick2 from './sounds/oldskool/oldskool_kick2.wav';
import oldskool_perc1 from './sounds/oldskool/oldskool_perc1.wav';
import oldskool_perc2 from './sounds/oldskool/oldskool_perc2.wav';
import oldskool_perc3 from './sounds/oldskool/oldskool_perc3.wav';
import oldskool_snare1 from './sounds/oldskool/oldskool_snare1.wav';
import oldskool_snare2 from './sounds/oldskool/oldskool_snare2.wav';

const samples = [
  {key: "Q", sound: oldskool_perc1, label:"Q"},
  {key: "W", sound:oldskool_hat1 , label:"W"}, 
  {key: "E",sound:oldskool_hat2, label:"E"},

  {key: "A",sound:oldskool_perc3, label:"A"},
  {key: "S",sound:oldskool_snare1, label:"S"},
  {key: "D",sound:oldskool_snare2, label:"D"},
  
  {key: "Z",sound:oldskool_perc2, label:"Z"},
  {key: "X",sound:oldskool_kick2, label:"X"},
  {key: "C",sound:oldskool_kick1, label:"C"},
  
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

// TODO: Create full drum kit - DJTECHTOOLS sample packs 

// TODO: Separate drum kits into different file

// TODO: Switch drum kit

// TODO: CSS

export default App;
