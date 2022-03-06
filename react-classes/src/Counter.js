import React, { Component } from 'react'
import './main.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
    }

    increment = () => {
        this.setState({val: this.state.val+1})
    }

    render() {
        return (
            <div>
                <h2>Current value:</h2>
                <p id="curr_val">{this.state.val}</p>
                <button id="increment" onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;