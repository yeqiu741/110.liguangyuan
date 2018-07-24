import React, {Component} from 'react';
import '../App.js';


export default class messageBox extends Component{
  manyStep=()=>{
    this.props.dailogMany();
    const {onClick,idx}=this.props;
    if (onClick){
      onClick(idx);
    }
  }

  render(){
    const {item} = this.props;
    return(   
      <div>    
            <li>
              <img src={item.icon} alt="图片加载失败！" />
              <div className="messageBoxTitelDescription">
                <p className="pTitle">{item.name}</p>
                <p className="pDescription">{item.description}</p>
              </div>
              <div className="messageBoxTimeMany">
                <p className="pTime">{item.time}</p>
                <button onClick={this.manyStep} >{item.button}</button>
              </div>
           </li>
      </div>
    )
  }
    
}
       