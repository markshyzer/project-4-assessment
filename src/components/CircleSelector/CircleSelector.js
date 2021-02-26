import React, { Component } from 'react';
import './CircleSelector.css'


class CircleSelector extends Component {
  render() {
    return (
      <div className="CircleSelector">
          {this.props.circles.map((c, i) => 
          <button 
          key={i+1} 
          className={c ? "selected" : ""}
          onClick={() => this.props.handleClick(i)}>
            SELECT CIRCLE {i+1}
          </button>
          )}
      </div>
    );
  }
}

export default CircleSelector;