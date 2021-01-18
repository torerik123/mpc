import './App.css';

// State
  // Sounds array = [kick: X, snare: X, hihat: X, , ride: X, tom: X, etc]

// Web audio API - Create audio context  
const AudioContext = window.AudioContext || window.webkitAudioContext; // for legacy browsers

const audioContext = new AudioContext();

function App() {
  return (
    <div className="App">
      <div className="drumpads">
      <button onClick={playsound}>Kick</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>     
      </div>
    </div>
  );
}

function playsound() {
  alert("this is the kick");
}


export default App;
