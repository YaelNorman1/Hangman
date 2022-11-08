import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

    render() {
        return (
            <div>
                <h4>Avilable letters</h4>
                {Object.keys(this.props.letterStatus)
                .map((letter) => this.props.letterStatus[letter]?<Letter key={letter} className="out" letter={letter} selectLetter={this.props.selectLetter}/>:<Letter key={letter} className="in" letter={letter} selectLetter={this.props.selectLetter}/>)}
            </div>
        )
    }
}

export default Letters;