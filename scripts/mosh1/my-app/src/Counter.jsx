import React, { Component } from 'react';
import 'bootstrap'

class Counter extends Component {

    state = {
        count: 0,        
    }

    render() {
        return (
            <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button>Increment</button>
            </div>
        );
    }
        
    formatCount() {
        const { count } = this.state; 
    const exp = <span>{(count === 0 ? 'Zero' : count)}</span>
        return (exp);
    }
}

export default Counter;