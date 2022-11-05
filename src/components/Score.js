import React, { Component } from 'react';

class Score extends Component {

    // constructor(){
    //     super()
    //     this.state= {
    //         currentScore: 100
    //     }
    // }
    render() {
        return (
            <div>
                <div>{this.props.score}</div>
            </div>
        )
    }
}

export default Score;