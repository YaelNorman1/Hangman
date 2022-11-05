import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: {
        
          A: false,
          B: false,
          C: false,
          D: false,
          E: true,
          F: false,
          G: false,
          H: false,
          I: false,
          J: false,
          K: false,
          L: false,
          M: false,
          N: false,
          O: false,
          P: false,
          Q: false,
          R: false,
          S: true,
          T: false,
          U: false,
          V: false,
          W: false,
          X: false,
          Y: true,
          Z: false
        
      },
      solution: {
        word: "BYTES",
        hint: "not a word"
      },
      score: 100
    }
    // this.generateLetterStatuses()
  }

  generateLetterStatuses(){
    for (let i = 65; i <= 90; i++) {
      this.state.letterStatus[String.fromCharCode(i)] = false;
    }
  }

  render(){
    return(<div>
      <Score score= {this.state.score}/> 
      <Solution letterStatus= {this.state.letterStatus} solution= {this.state.solution}/>
      <Letters letterStatus= {this.state.letterStatus}/>
    </div>)

  } 
}

export default App;
