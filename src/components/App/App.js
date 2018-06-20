import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import StarList from '../StarList/StarList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <StarList />
      </div>
    );
  }
}

export default App;
