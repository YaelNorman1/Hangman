import React, { Component } from 'react';


const HIGH= 80;
const MEDIUM= 50;


class Score extends Component {

    getColorScore(score){
        if (score> HIGH) {
            return "high";
        }
        else if (score < HIGH && score > MEDIUM){
            return "medium";
        }
        else {
            return "low";
        }
    }
    render() {
        return (
            <div>
                <div class= {this.getColorScore(this.props.score)}>{this.props.score}</div>
            </div>
        )
    }
}

export default Score;