import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {

    render() {
        return (
            <div>
                {this.props.solution.word
                .split('')
                .map(letter => this.props.letterStatus[letter]?<Letter key={letter} letter= {letter} /> : <Letter key={letter} letter= '_' />)}
                <div>{this.props.solution.hint}</div>
            </div>
        )
    }
}
export default Solution;