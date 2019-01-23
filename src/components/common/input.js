import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {type, value, name, id, min} = this.props;
        return (
            <input type={type} value={value} name={name} id={id} min={min}/>
        );
    }
}

export default Input;