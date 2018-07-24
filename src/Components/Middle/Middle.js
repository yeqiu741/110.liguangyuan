import React, {Component} from 'react';
import TabList from './TabList';
import './Middle.css';

export default class Middle extends Component{
    constructor(props){
        super(props);
        this.state={
            message:[
                {
                    title:'微信',
                    dailog:false
                },
                {
                    title:'通讯录',
                    dailog:false
                },
                {
                    title:'发现',
                    dailog:false
                },
                 {
                    title:'我',
                    dailog:false
                }
            ],
            flag:false
        }
    }

    onAddClick =()=>{
        this.setState({
          flag:!this.state.flag
        })
      }
    renderTabList=()=>{
        const rtl = this.state.message.map((item,idx)=>{
            return(<TabList key={idx} item={item} dailog={this.onAddClick} />)
        })
        return rtl;
    }

    render(){
        return(
            <div id="middle">
			<ul>
				{this.renderTabList()}
			</ul>
		</div>
        )
    }
}