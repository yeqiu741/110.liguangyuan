import React,{Component} from 'react';
import Wechat from './container/WeChat.js'
import {createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger'
import './App.css'

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)
  
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wechat />
      </Provider>
    )
  }
}