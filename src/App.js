import React, { Component } from 'react';
import Header from './Components/Header.js';
import TabBar from './Components/TabBar.js';

import { createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import './App.css'
const store = createStore(
  rootReducer
)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <TabBar />
        
      </div>
    </Provider>
    )
  }
}

export default App;
