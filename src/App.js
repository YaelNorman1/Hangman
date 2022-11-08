import React, { Component } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

const START_LETTER= 65;
const END_LETTER= 90;
const DECREASE_SCORE= 20;


class App extends Component {
  constructor() {
    super()
    this.state = {
      solution: {
        word: "BYTES",
        hint: "not a word"
      },
      score: 100,
      letterStatus: {}, 
      isWon: false,
      isEndGame: false
    }
    this.generateLetterStatuses();
  }

  generateLetterStatuses(){
    for (let i = START_LETTER; i <= END_LETTER; i++) {
      this.state.letterStatus[String.fromCharCode(i)] = false;
    }
  }

  selectLetter= (letter) => {
    let letterDict= {...this.state.letterStatus};
    letterDict[letter] = true;
    this.setState({letterStatus : letterDict});

    if (!this.state.solution.word.includes(letter)){
      if (this.state.score > 0){
        const newScore= this.state.score - DECREASE_SCORE;
        this.setState({score: newScore});
      }
    }

  }

  didEndGame(){
    if (this.state.score === 0){
      this.setState({isWon: false})
      this.setState({isEndGame: true})
      // return true
    }

    return this.guessedAllLetters();
  }

  guessedAllLetters(){
    const secretWord= this.state.solution.word;
    const letterStatus= this.state.letterStatus;
    for (let c of secretWord) {
      if (!letterStatus[c]){
        this.setState({isWon: false})
        // return false;
      }
    }
    this.setState({isWon: true})
    this.setState({isEndGame: true})
    // return true;
  }

  render(){
    return(
    <div>
      <Score score= {this.state.score}/> 
      <Solution letterStatus= {this.state.letterStatus} solution= {this.state.solution}/>
      <Letters letterStatus= {this.state.letterStatus} selectLetter= {this.selectLetter}/>
      {this.didEndGame()}
      {this.state.isEndGame? <EndGame isWon={this.state.isWon} />: <></>}
    </div>
    )

  } 
}

export default App;
