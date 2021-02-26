import React, { Component } from 'react';
import './Circles.css'


class Circles extends Component {
  render() {
    return (
      <div className="Circles">
        {this.props.circles.map((c, i) => 
            <div 
            key={i+1} 
            className={c ? "selected" : ""}>
            {i+1}
            </div>  
        )}
      </div>
    );
  }
}

export default Circles;