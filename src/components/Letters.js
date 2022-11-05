import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {

    render() {
        return (
            <div>
                <h6>Avilable letters</h6>
                {Object.keys(this.props.letterStatus).map((letter) => this.props.letterStatus[letter]?<Letter key={letter} className="out" letter={letter}/>:<Letter key={letter} className="in" letter={letter}/>)}
            </div>
        )
    }
}

export default Letters;