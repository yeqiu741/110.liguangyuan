import React,{Component} from 'react';
import ColorList from './ColorList';
import './TabList.css';

export default class TabList extends Component{



    render(){
        const {item} = this.props;
        return(
            <li className="tabList">
				<div  className="title">{item.title}</div>
				<ColorList dailog={this.props.dailog}  />
			</li>
        )
    }
}