import React,{Component} from 'react';
import './BottomList.css';

export default class Bottom extends Component{
    render(){
        const{item} = this.props;
        return (
			<div className="navBox">
				<img src={item.icon}  alt="图片加载失败！"/>
				<p>{item.title}</p>
			</div>
        )
    }
}