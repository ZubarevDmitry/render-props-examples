import React, {Component} from 'react';
import Mouse from "./Mouse";
import Cat from "./Cat";
import MouseMinusFifty from "./MouseMinusFifty";

class MouseContainer extends Component {
    render() {
        return (
            <div className="MouseContainer">
                <h3>Mouse Tracker</h3>
                <p>If you move mouse by x less than 300px it'll switch to another Component</p>
                <Mouse render={ mouse => (mouse.x > 300 ? <Cat mouse={mouse} /> : <MouseMinusFifty mouse={mouse} />)}/>
            </div>
        );
    }
}

export default MouseContainer;