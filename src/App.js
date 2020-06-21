import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component{
  state={
    ninjas : [
      {name:'bhavya',age:20,id:1},
      {name:'akhil',age:23,id:2},
    ]
  }
  render() {
    return (
    <div className="App">
      <h1>MY first</h1>
      <Ninjas ninjas={this.state.ninjas} />

    </div>
    );
  }
}

export default App;
