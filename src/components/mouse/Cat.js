import React, {Component} from 'react';

class Cat extends Component{
    render(){
        let {x, y} = this.props.mouse;
        return (
            <div className="Cat">
                <p>Cat Component {x}, {y}</p>
            </div>
        )
    }
}

export default Cat;