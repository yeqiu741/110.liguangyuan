import React, { Component } from 'react';
import MessageBox from './Components/messageBox.js';
import './App.css';
import './CSS/navTop.css'
import './CSS/messageBox.css';
import './CSS/navBottom.css';
import './CSS/daiogAdd.css';
import './CSS/dailogMany.css';
import DailogAdd from './Components/DailogAdd.js';
import DailogMany from './Components/DailogMany.js';
import NavBottom from './Components/NavBottom.js';
import NavTop from './Components/NavTop.js';

//顶部导航栏图片
const iconSerch = require('./IMG/serch.png');
const iconAdd = require('./IMG/add.png');

//中部信息栏图片
const icon0 = require('./IMG/0.jpg');
const icon1 = require('./IMG/1.jpg');
const icon2 = require('./IMG/2.jpg');
const icon3 = require('./IMG/3.jpg');
const icon4 = require('./IMG/4.jpg');
const icon5 = require('./IMG/5.jpg');

//底部导航栏图片
const iconWechat = require('./IMG/wechat.png');
const iconAddress_list = require('./IMG/address_list.png');
const iconFind = require('./IMG/find.png');
const iconMe = require('./IMG/me.png');

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      navTop:[
        {
        icon1:iconAdd,
        icon2:iconSerch,
        title:'微信'
        }
      ],
      messageBox : [
        {
          icon : icon0,
          name : '珊儿',
          description : '想我了没QAQ。',
          time : '8：00' ,
          button : '更多'
        },
        {
          icon : icon1,
          name : '小年糕*石磊',
          description : '去上厕所不？',
          time : '13：19', 
          button : '更多'
       },
        {
        icon : icon2,
        name : '叶秋',
        description : '走，KTV走一波？',
        time : '14：39' , 
        button : '更多'
       },
       {
        icon : icon3,
        name : '王伟',
        description : '你干啥呢？',
        time : '15：10', 
        button : '更多' 
      },
      {
        icon : icon4,
        name : '知你故来风',
        description : '兄弟，明天记得交作业',
        time : '18：59' , 
        button : '更多'
      },
      {
        icon : icon5,
        name : '小妹',
        description : '哥，回家吃饭了。',
        time : '19：30' , 
        button : '更多'
      }
     
    ],
    navBottom:[
      {
        icon:iconWechat,
        title:'微信'
      },
      {
        icon:iconAddress_list,
        title:'通讯录'
      },
      {
        icon:iconFind,
        title:'发现'
      },
      {
        icon:iconMe,
        title:'我'
      }
    ] ,
    dailogAdd:false,
    dailogMany:false
    }
   
  }

  
//底部导航栏组件
  renderNavBottom = ()=>
  {
    const renderNavBottom = this.state.navBottom.map((item,idx)=>{
      return <NavBottom key={idx} item={item} />
    });
    return renderNavBottom;
  }


//‘加号’页面点击事件
  onAddClick =()=>{
    this.setState({
      dailogAdd:!this.state.dailogAdd
    })
  }
  renderNavTop = (message)=>{//头部导航栏组件
    return (<NavTop item={message} dailogAdd={this.onAddClick}/>)
  }
  renderDaiLogAdd = () =>{//加号弹窗组件
    if(this.state.dailogAdd)
    return(<DailogAdd dailogAdd={this.onAddClick} conhandleMessage={this.onhaeMessage}/>)
  }
   //‘加号’提交按钮事件
   onhaeMessage=(title,description,time)=>{
    const newMess = this.state.messageBox.slice();
    newMess.unshift({
      name:title,
      description:description,
      time:time,
      icon:icon1,
      button:'更多',
    });
    this.setState(
     { messageBox:newMess}
    )
    this.setState({
      dailogAdd:!this.state.dailogAdd
    });
  }


//‘更多’页面点击事件
  onManyClick =()=>{
    this.setState({
      dailogMany:!this.state.dailogMany
    })
  }
  renderDaiLogMany = () =>{//更多弹窗组件
    if(this.state.dailogMany)
    return(<DailogMany dailogMany={this.onManyClick}  dM={this.handleMessageD} up={this.handleUpMessage}/>)
  }
  renderMessageBox = ()=>{//中部信息栏组件
    const content = this.state.messageBox.map((item,idx) =>{
      return <MessageBox key={idx} item={item} idx={idx} onClick={this.handelindex}  dailogMany={this.onManyClick}/>
    })
    return content;
  }

  handelindex=(idx)=>{
    this.setState({
      index:idx
    })
  }


  //删除按钮的处理函数
  handleMessageD=(idx)=>{
    const{messageBox} = this.state;
    const newMess = messageBox.slice();
    newMess.splice(idx,1);
    this.setState({
      messageBox:newMess
    });
    this.setState({
      dailogMany:false
    })
  }

  //置顶按钮的处理函数
  handleUpMessage=(idx)=>{
    const{messageBox} = this.state;
    const newMess = messageBox.slice();
    const arr = newMess.splice(idx,1);
    newMess.unshift(arr[0]);
    this.setState({
      messageBox:newMess
    });
    this.setState({
      dailogMany:false
    });
  }
 
  render() {
    return (
      <div className="App">
            {this.renderDaiLogAdd()  }
            {/*头部导航栏*/}
            {this.renderDaiLogMany()}
            {this.renderNavTop(this.state.navTop) }


            {/*中部信息栏*/}
            <div className="messageBox">
              <div className="messageBox1">
                <ul>
                {this.renderMessageBox()}
                </ul>
              </div>
            </div>

            {/*底部导航栏*/}
            <div className="navBottom">
              {this.renderNavBottom()}
            </div>
            
          </div>    
    );
  }
}

export default App;
