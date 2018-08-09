import React,{Component} from 'react'
import './Progress.css'

export default class Progress extends Component{
    static defaultProps={
        isActive:false
    }
    getMaskClassName = ()=>{
        if(!this.props.isActive){
            return 'p2'
        }else{
            return 'p1'
        }
    }
    render(){

      return(
            <div className="actionsheetCtn">
                <div className={this.getMaskClassName()}>
                <p></p>
                </div>
            </div>
        );
    }
}