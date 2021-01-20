import './App.css';
import React, { Component } from 'react'

// State
  // Sounds array = [kick: X, snare: X, hihat: X, , ride: X, tom: X, etc]

// Web audio API - Create audio context  
const AudioContext = window.AudioContext || window.webkitAudioContext; // for legacy browsers

const audioContext = new AudioContext();

class App extends Component {
  render() {
    
    // This should be in state
    const samples = ['Kick', 'Snare', 'Hi-hat'];

    return (
      <div className="App">
          {samples.map((value, index) => {
          return <button key={index} onClick={()=> this.playsound(index)}>{value}</button>
          })}        
      </div>
    );
  }
playsound = (event) => {
  alert("button clicked")
  }
}





export default App;
