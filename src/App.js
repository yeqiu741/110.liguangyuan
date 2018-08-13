import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import confingureStore from './store/configureStore';
import Jurisdiction from './container/Jurisdiction'

const store = confingureStore()

class App extends Component{
  render(){

    return(
      <Provider store={store}>
        <Jurisdiction />
      </Provider>
    )
  }
}

export default App;
