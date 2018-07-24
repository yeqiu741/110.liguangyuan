import React,{Component} from 'react';
import './ColorList';

const icon = require('../Bottom/IMG/true.png');
export default class Photo extends Component{
    dailogView = ()=>{
        const dailog = this.props.flag;
        console.log(1)
        if(!dailog)
        {
            return null;
        }
    }
    render(){
        return(
            <img  src={icon} onClick={this.dailogView}  alt="图片加载失败！"/>
        )
    }
}