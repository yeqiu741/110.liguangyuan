import React, { Component } from 'react';
import Top from './Components/Top/Top';
import Bottom from './Components//Bottom/Bottom';
import Middle from './Components/Middle/Middle';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
        message:[
            {
                title:'微信',
                dailog:false
            },
            {
                title:'通讯录',
                dailog:false
            },
            {
                title:'发现',
                dailog:false
            },
            {
                title:'我',
                dailog:false
            }
        ],
        flag:false
    }
}

 
  render() {
    return(
      <div className="App">
        <Top />
        <Middle />
        <Bottom />
      </div>
    )
  }
}

export default App;
