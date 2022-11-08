import React, { Component } from 'react';

class EndGame extends Component {

    // wonOrLost(){
    //     const secretWord= this.props.secretWord;
    //     const letterStatus= this.props.letterStatus;

    //     for (let c of secretWord) {
    //         if (!letterStatus[c])
    //             return false;
    //     }
    //     return true;
    // }

    render() {
        return (
            <div>
                {this.props.isWon ? <h1>Congratulations TOTACH</h1> : <h1>Try again looser. the secret word is : {this.props.word}</h1>}
            </div>
        )
    }
}

export default EndGame;