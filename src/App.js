import React, { Component } from 'react';
import Header from './Components/Header.js';
import TabBar from './Components/TabBar.js';
import NavButton from './Components/TabBar/NavButton.js';
import Tables from './Components/TabBar/Tables.js';


import './App.css'


class App extends Component {
  render() {
    return (
     
      <div className="App">
        <Header />
        <TabBar />
        <NavButton />
        <Tables />
      </div>

    )
  }
}

export default App;
