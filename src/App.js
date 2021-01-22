import './App.css';
import React, { Component } from 'react'
import useSound from 'use-sound';
import kick17 from './sounds/kick17.wav';

// TODO: IMPORT HOWLER.js
// TODO: Play sound function

const samples = [
  {sound: kick17, label:"kick"},
  {sound: kick17, label:"kick"}, 
  {sound: kick17, label:"kick"},
]

class App extends Component {

  // Creates a button for each sample
  renderbuttons = () => {
    return samples.map((soundObj, i) => {
      return <button key={i} onClick={()=>{this.playsound(i)}}>{i}</button>
    })
  }

  // Plays samples
  playsound = (index) => {
    alert("button" + index + "clicked")
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
