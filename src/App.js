import './App.css';
import React, { Component } from 'react'
import useSound from 'use-sound';

import kick17 from './sounds/kick17.wav';

const Drumpads = () => {
  const [play] = useSound(kick17);

  return <button onClick={play}>Kick</button>;
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        samples: ["Kick","Snare","Hi-hat"],
    };
  }
    render() {   
    // Creates a button for each sample
    return (
      <div className="App">

        <Drumpads></Drumpads>
      </div>
    );
  }
}

// TODO: Make array with samples

// TODO: Get button to play sample from array

// TODO: Make button take name input to show name of sample

// TODO: Get key pressed

// TODO: Get value of button clicked

// TODO: Play sound at index[i]

export default App;
