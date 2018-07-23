import React, {Component} from 'react';
import '../App.js';


export default class Dailog_many extends Component{
    deletMessage=()=>{
        this.props.dM();
    }
    
    setTop=()=>{
        this.props.up();
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