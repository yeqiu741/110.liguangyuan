import React,{Component} from 'react';
import BottomList from './BottomList';
import './Bottom.css';

const iconWechat = require('./IMG/wechat.png');
const iconAddress_list = require('./IMG/address_list.png');
const iconFind = require('./IMG/find.png');
const iconMe = require('./IMG/me.png');

export default class Bottom extends Component{
    constructor(props){
        super(props);
        this.state={
            message:[
                {
                    title:'微信',
                    icon:iconWechat
                },
                {
                    title:'通讯录',
                    icon:iconAddress_list
                },
                {
                    title:'发现',
                    icon:iconFind
                },
                {
                    title:'我',
                    icon:iconMe
                }
            ],
        }
    }

    renderNavBottom = ()=>
  {
    const renderNavBottom = this.state.message.map((item,idx)=>{
      return <BottomList key={idx} item={item} />
    });
    return renderNavBottom;
  }


    render(){
        return(
            <div id="bottom">
                {this.renderNavBottom()}
            </div>
        ) 
        
    }
}