import React, {Component} from 'react';

class MouseMinusFifty extends Component{
    render(){
        let {x, y} = this.props.mouse;
        let newX = x - 50;
        let newY = y - 50;
        return (
            <div className="MouseMinusFifty">
                <p>Component With Minus 50px for Mouse position</p>
                <p>Correct Mouse position {x}, {y}</p>
                <p>Fixed Mouse position {newX}, {newY}</p>
            </div>
        )
    }
}

export default MouseMinusFifty;