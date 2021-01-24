import './App.css';
import React, { Component } from 'react'
import {Howl, Howler} from 'howler';
import kick17 from './sounds/kick17.wav';
import snare14 from './sounds/snare14.wav';
import hihat3 from './sounds/hihat3.wav';

const samples = [
  {sound: kick17, label:"Kick"},
  {sound: snare14, label:"Snare"}, 
  {sound: hihat3, label:"Hi-hat"},
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


  handleKeyPress = (event) => {
      console.log(event.key)
  }

  // Listen for key press
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
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
