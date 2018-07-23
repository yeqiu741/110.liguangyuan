import React, {Component} from 'react';
import '../App.js';


export default class messageBox extends Component{
  constructor(props){
    super(props);
  }
  handlemany=()=>{
    this.props.idx1(this.props.itemIndex);
  }
 
  render(){
    const {item} = this.props;
    return(       
            <li>
              <img src={item.icon} alt="图片加载失败！" />
              <div className="messageBoxTitelDescription">
                <p className="pTitle">{item.name}</p>
                <p className="pDescription">{item.description}</p>
              </div>
              <div className="messageBoxTimeMany">
                <p className="pTime">{item.time}</p>
                <button onClick={this.props.dailogMany} >{item.button}</button>
              </div>
           </li>
    )
  }
    
}
       