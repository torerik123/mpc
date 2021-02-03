import './App.css';
import React, { Component } from 'react'
import {Howl, Howler} from 'howler';

// Old school kit
import {
  oldskool_hat1, oldskool_hat2, oldskool_kick1,
  oldskool_kick2, oldskool_perc1, oldskool_perc2,
  oldskool_perc3, oldskool_snare1, oldskool_snare2
} from './sounds.js';

// Buchla Drums
import {
  buzz, clave, clumk,
  congabig, midtom, Tabla8,
  Tabla9, Tabla11, Woodblock
} from './sounds.js'

// Drumbrute
import {
  AltSD5, Clap2, Clap3,
  Hats1, Hats37, KickALong2,
  Kick12, KickOD4, Snare29
} from './sounds.js'

const samples = {
  "Old Skool": {
    "0": {key: "Q", sound: oldskool_perc1, label:"Q"},
    "1": {key: "W", sound:oldskool_hat1 , label:"W"},
    "2": {key: "E",sound:oldskool_hat2, label:"E"},
    "3": {key: "A",sound:oldskool_perc3, label:"A"},
    "4": {key: "S",sound:oldskool_snare1, label:"S"},
    "5": {key: "D",sound:oldskool_snare2, label:"D"},
    "6": {key: "Z",sound:oldskool_perc2, label:"Z"},
    "7": {key: "X",sound:oldskool_kick2, label:"X"},
    "8": {key: "C",sound:oldskool_kick1, label:"C"}
  },

  "Buchla Drums" : {
    "0": {key: "Q", sound: buzz, label:"Q"},
    "1": {key: "W", sound:clumk , label:"W"},
    "2": {key: "E",sound:congabig, label:"E"},
    "3": {key: "A",sound:clave, label:"A"},
    "4": {key: "S",sound:Tabla9, label:"S"},
    "5": {key: "D",sound:Tabla11, label:"D"},
    "6": {key: "Z",sound:Tabla8, label:"Z"},
    "7": {key: "X",sound:midtom, label:"X"},
    "8": {key: "C",sound:Woodblock, label:"C"}
  },

  "Drumbrute": {
    "0": {key: "Q", sound: Hats37, label:"Q"},
    "1": {key: "W", sound:Hats1 , label:"W"},
    "2": {key: "E",sound:AltSD5, label:"E"},
    "3": {key: "A",sound:Clap3, label:"A"},
    "4": {key: "S",sound:Clap2, label:"S"},
    "5": {key: "D",sound:Snare29, label:"D"},
    "6": {key: "Z",sound:KickALong2, label:"Z"},
    "7": {key: "X",sound:Kick12, label:"X"},
    "8": {key: "C",sound:KickOD4, label:"C"}
  },
 }

const drumkits = [
  {key: "1", name: "Old Skool"},
  {key: "2", name: "Buchla Drums"},
  {key: "3", name: "Drumbrute"},
]

class App extends Component {
  constructor(props) {
                    super(props);
                    this.state = {
                        selectedkit: drumkits[0].name
                    };
                }

  
  renderbuttons = () => {
    // Creates a button for each sample

    // Get selected kit
    const selectedkit = this.state.selectedkit
    
    // Look for selected kit in samples
    for ( let kit in samples) {

      if(kit === selectedkit) {
        // New array with selected drumkit
        const drumkit = Object.values(samples[selectedkit])
        
        // Return button for each value
        return drumkit.map((soundObj, i) => {
          return (
            <div className="container">
              <button className="drumpad" key={i} onClick={()=> this.playsound(soundObj.sound)}>
                {soundObj.label}
              </button>
            </div>
          )
        })
      }
    }

  }

  renderpadbank = () => {
    // Creates buttons for switching drumkits
    return drumkits.map((obj, i) => {
      return (
        <div>
          <button className="pad-bank-btn" key={i} onClick={()=> this.changeKit(i+1)}>
            {obj.key}
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
    document.removeEventListener('keydown',this.handleKeyPress);
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
    // Get key pressed -> Play sound or change drumkits

    // If key pressed is a number - change drumkit
    if (!isNaN(event.key))  {
      this.changeKit(event.key)
    } 
    
    // Make key pressed uppercase
    const keyPressed = event.key.toUpperCase()
    // Check if key pressed exists in samples
    const selectedkit = this.state.selectedkit  
    
    if (this.existsInObj(keyPressed, samples[selectedkit])) {
      // Array to iterate over values in selected drumkit
      const drumkit = Object.values(samples[selectedkit])
      
      // Play corresponding sound
      drumkit.forEach(element => {
        if (element.key === keyPressed) {
          this.playsound(element.sound)
        }
      });
    };      
  };

  changeKit = (event) => {
    // Change drumkits with the pad bank buttons

    const keyPressed = event.toString()

    // Check if pressed key exists in drumkits
    if (this.existsInObj(keyPressed, drumkits)) {
      // Map over drumkits, find the name of selected drumkit and update state
      drumkits.forEach((kit) => {
        if (kit.key === keyPressed) {
          this.setState({
            selectedkit: kit.name
        });
        }
      })
    }
  }


  // Render app
  render() {
     
    return (
      <div className="App">
        <div className="container">
          <div className="mpc">
            <div className="pad-container">
                {this.renderbuttons()}
            </div>
            <div className="kit-controls">
              <div className="kit-controls-margin">
              <p className="kit-selected-title">SELECTED KIT</p>
              <div className="kit-row-1">
                <div className="kit-selected"> 
                  <p className="kit-text">{this.state.selectedkit}</p> 
                </div>
              </div>
              <p className="pad-bank-title">PAD BANK</p>
              <div className="kit-row-2">
                <div className="pad-bank-container"> 
                  {this.renderpadbank()}
                </div>
              </div>
              <div className="kit-row-3">
                <p className="how-to-use">
                  <u>Pad bank:</u>
                  <br></br> 
                  Select drum kits
                  <br></br>
                  <br></br>
                  <u>Play sound:</u> <br></br>Use the keyboard or click the pads to play samples
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>        
    </div>
    );
  }
  
}

export default App;
