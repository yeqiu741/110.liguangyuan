import React, { Component } from 'react';
//import StudentMessage from './container/StudentMessage'
//  import Op from './container/Op'
// import ClassDetails from './container/ClassDetails'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import './App.css'
import { createLogger } from 'redux-logger'
import Routers from './routers/index'
import serverApi from './middleware/serverApi'




const logger = createLogger();

const store = createStore(
  rootReducer,
    applyMiddleware(serverApi,logger),
)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      {/*<StudentMessage /> */}
      {/* <ClassDetails /> */}
      {/* <Op />  */}
      <Routers />
    </Provider>
    )
  }
}

export default App;
