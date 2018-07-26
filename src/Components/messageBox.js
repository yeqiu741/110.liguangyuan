import React, {Component} from 'react';
import '../container/WeChat';


export default class messageBox extends Component{

  handlemany=()=>{
    this.props.idx1(this.props.itemIndex);
  }
 
  render(){
    const {item} = this.props;
    return(       
            <div className="messageList">
              <img src={item.icon} alt="图片加载失败！" />
              <div className="messageBoxTitelDescription">
                <p className="pTitle">{item.name}</p>
                <p className="pDescription">{item.description}</p>
              </div>
              <div className="messageBoxTimeMany">
                <p className="pTime">{item.time}</p>
                <button onClick={this.props.dailogMany} >{item.button}</button>
              </div>
           </div>
    )
  }
    
}
       