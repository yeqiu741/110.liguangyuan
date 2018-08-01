import React, { Component } from 'react';
 import StudentMessage from './container/StudentMessage'
//import Op from './container/Op'
// import ClassDetails from './container/ClassDetails'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import './App.css'
import { createLogger } from 'redux-logger'

const logger = createLogger();

const store = createStore(
  rootReducer,
    applyMiddleware(logger),
)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
        {/*  <ClassDetails  />
        <Op /> */}
        <StudentMessage />
    </Provider>
    )
  }
}

export default App;
