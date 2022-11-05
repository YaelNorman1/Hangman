import React, { Component } from 'react';

class Letter extends Component {

    render() {
        return <span class= {this.props.className}>{this.props.letter}</span>
    }
}

export default Letter;


