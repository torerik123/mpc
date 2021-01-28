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

const drumkits = [
  {key: "1", name: "Old Skool"},
  {key: "2", name: "Kit 2"},
  {key: "3", name: "Kit 3"},
  {key: "4", name: "Kit 4"}

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
    return samples.map((soundObj, i) => {
      return (
        <div>
          <button className="drumpad" key={i} onClick={()=> this.playsound(soundObj.sound)}>
            {soundObj.label}
          </button>
        </div>
      ) 
    })
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
    if (this.existsInObj(keyPressed, samples)) {
      
      // Play corresponding sound
      samples.forEach(element => {
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
                <p className="how-to-use">Pad bank: Select drum kits<br></br>
                                          Play sound: Use the keyboard or click the pads to play samples</p>
              </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
  
}

// TODO: Separate drum kits into different file

// TODO: CSS

export default App;
