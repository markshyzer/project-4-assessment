import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      circles: [true, false, false, false]
    }
  }

  handleClick = (i) => {
    let newCircles = [false, false, false, false]
    newCircles[i] = true
    this.setState({circles: [...newCircles]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          circles={this.state.circles}
          handleClick={this.handleClick}/>
          <Circles 
          circles={this.state.circles}/>
        </main>
      </div>
    );
  }
}

export default App;
