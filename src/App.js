import React, { Component } from 'react';
import './App.css';
import MouseContainer from "./components/mouse/MouseContainer";
import UsersContainer from "./components/users/UsersContainer";

class MouseTracker extends Component {
    render() {
        return (
          <div className="App">
              <h2>Render Props examples</h2>
              <div className="item">
                  <MouseContainer/>
              </div>
              <div className="item">
                  <UsersContainer/>
              </div>
          </div>
        );
  }
}

export default MouseTracker;
