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
        <button key={i} onClick={()=> this.playsound(soundObj.sound)}>
          {soundObj.label}
        </button>
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

  // Render app
  render() {   
    return (
      <div className="App">
        <div>{this.renderbuttons()}</div>        
      </div>
    );
  }

}

// TODO: Get button to play sample from array

// TODO: Make button take name input to show name of sample

// TODO: Get key pressed

// TODO: Get value of button clicked

export default App;
