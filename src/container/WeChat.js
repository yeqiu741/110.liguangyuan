import React, { Component } from 'react';
import MessageBox from '../Components/messageBox.js';
import '../App.css';
import '../CSS/navTop.css'
import '../CSS/messageBox.css';
import '../CSS/navBottom.css';
import '../CSS/daiogAdd.css';
import '../CSS/dailogMany.css';
import DailogAdd from '../Components/DailogAdd.js';
import DailogMany from '../Components/DailogMany.js';
import NavBottom from '../Components/NavBottom.js';
import NavTop from '../Components/NavTop.js';
import {addItem} from '../actions'
import {dailog} from '../actions'
import { connect } from 'react-redux'
import *  as addActions  from '../actions'
import { bindActionCreators } from 'redux';

//顶部导航栏图片
const iconSerch = require('../IMG/serch.png');
const iconAdd = require('../IMG/add.png');



//底部导航栏图片
const iconWechat = require('../IMG/wechat.png');
const iconAddress_list = require('../IMG/address_list.png');
const iconFind = require('../IMG/find.png');
const iconMe = require('../IMG/me.png');

class wechat extends Component {
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


  handleAddTodo = () => {
    const { addActions } = this.props;
    addActions.dailogAdd();

  }



  renderNavTop = (message)=>{//头部导航栏组件
    return (<NavTop item={message} dailogAdd={this.onAddClick}/>)
  }
  renderDaiLogAdd = () =>{//加号弹窗组件
    if(this.state.dailogAdd)
    return(<DailogAdd dailogAdd={this.onAddClick} conhandleMessage={this.onhaeMessage} addActions = {addActions}/>)
  }
   //‘加号’提交按钮事件
   onhaeMessage=(item)=>{
  //   const newMess = this.state.messageBox.slice();
  //   newMess.unshift({
  //     name:title,
  //     description:description,
  //     time:time,
  //     icon:icon1,
  //     button:'更多',
  //   });
  //   this.setState(
  //    { messageBox:newMess}
  //   )
      const {todoActions} =this.props;
      todoActions.addItem(item)
      this.setState({
        dailogAdd:!this.state.dailogAdd
      })
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
  renderMessageBox = (messageState)=>{//中部信息栏组件
    console.log(messageState);
    const rmb = messageState.messageBox.map((item,idx)=>{
      return <MessageBox dailogMany={this.onManyClick} key={idx} item = {item} />
    });
    return rmb;  
  }
  

  //删除按钮的处理函数
  handleMessageD=()=>{
    const{messageBox} = this.state;
    const newMess = messageBox.slice();
    newMess.splice(this.state.index,1);
    this.setState({
      messageBox:newMess
    });
    this.setState({
      dailogMany:false
    })
  }

  //置顶按钮的处理函数
  handleUpMessage=()=>{
    const{messageBox} = this.state;
    const newMess = messageBox.slice();
    const arr = newMess.splice(this.state.index,1);
    newMess.unshift(arr[0]);
    this.setState({
      messageBox:newMess
    });
    this.setState({
      dailogMany:false
    });
  }
 
  render() {
    const { todoActions } = this.props;
    const {messageState} = this.props;
    console.log(this.props)
    return (

      
      <div className="App">
            {this.renderDaiLogAdd()  }

            {this.renderDaiLogMany()}
            {this.renderNavTop(this.state.navTop) }



            <div className="messageBox">
              <div className="messageBox1">
                {this.renderMessageBox(messageState)}
              </div>
            </div>


            <div className="navBottom">
              {this.renderNavBottom()}
            </div>
            
          </div>    
    );
  }
}

function mapStateToProps(state,ownProps){
  // state.list;
  const {dailogState,messageState} = state;
  console.log({dailogState,messageState});
  console.log(state);
  return {dailogState,messageState};
}
 function mapDispatchToProps(dispatch){
   return {
    todoActions: bindActionCreators(addActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(wechat);
