import React,{Component} from 'react';
import '../App.js';


export default class Nav_top extends Component{

    render()
    {
        const item = this.props.item[0];
        return(
            <div className="navTop">
                <div className="navTopSpan">	
                <span>{item.title}</span>
                </div>
                <ul>
                    <li>
                        <img src={item.icon1} alt="图片加载失败！" onClick={this.props.dailogAdd} />
                    </li>
                    <li>
                        <img src={item.icon2} alt="图片加载失败！" />
                    </li>
                </ul>
            </div>
        )
    };
}