import React,{Component} from 'react';
import '../WeChat.js';

export default class Nav_bottom extends Component{
    render(){
        const {item} = this.props;
        return (
            <div>
                <img src={item.icon} alt="图片加载失败！" />
                <p>{item.title}</p>
            </div>
        )
    }
}