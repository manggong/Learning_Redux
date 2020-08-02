import React, { Component } from 'react';
import './App.css';

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Numnber Root</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
    </div>
  );
}

export default App;
