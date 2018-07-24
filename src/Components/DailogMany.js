import React, {Component} from 'react';
import './messageBox.js'
import '../App.js';


export default class Dailog_many extends Component{

    deletMessage=()=>{
        this.props.dM();
        const {onClick,idx}=this.props;
        if (onClick){
          onClick(idx);
        }
    }
    
    setTop=()=>{
        this.props.up();
        const {onClick,idx}=this.props;
    if (onClick){
      onClick(idx);
    }
    }
    
    render()
    {

        return(
            <div id="dailogMany">
            <div id="dailogManyClose" onClick={this.props.dailogMany}>Close</div>
            <div id="dailogManyButton">
                <button onClick={this.setTop}>置顶</button><br />
                <button onClick={this.deletMessage}>删除</button>
            </div>
        </div>
        )
        
    }
}