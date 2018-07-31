import React,{Component} from 'react';
import './Header.css';
import { Avatar } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd'
const img = require('../img/0.jpg');

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            message:{
                    class:'三班人',
                    SID:'MID330900002',
                    onlineClass:'摄影课 绘画课',
                    startTime:'2018-03-30',
                    histroyMoney:987,
                    addStudyDay:'876天',
                    loginTimeLast:'2018-03-30',
                    telphoneNumber:13212333124,
                    weChatId:'zhfng',
                    word:''
                }
        }
    }
    

    render(){
        
        return(
            <div id="header">
                <Avatar className="header_bar" shape="square" size="large" icon="user" src={img} />
                <p className="SI">{this.state.message.class}</p>
                <div className="header_all">
                    <div className="header_title_box">
                        <p><span >学员编号：</span>{this.state.message.SID}</p>
                        <p><span>在学课程：</span>{this.state.message.onlineClass}</p>
                        <p><span>入学时间：</span>{this.state.message.startTime}</p>
                    </div>
                    <div className="header_title_box">
                        <p><span>历史付费额：</span>{this.state.message.histroyMoney}</p>
                        <p><span>累计学习天数：</span>{this.state.message.addStudyDay}</p>
                        <p><span>最后登登录时间：</span>{this.state.message.loginTimeLast}</p>
                    </div>
                    <div className="header_title_box">
                        <p><span>手机号码：</span>{this.state.message.telphoneNumber}</p>
                        <p><span>微信号码：</span>{this.state.message.weChatId}</p>
                        <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>{this.state.message.word}</p>
                    </div>
                    </div>
                        <Icon className="headerIcon" type="file-text" />
                    <div className="button_alll">
                        <Input size="small" className="button3" placeholder="zhfng" /> 
                        <Button className="button4" >提交</Button><br />
                        <Input size="small" className="button3"  />
                        <Button className="button4">提交</Button>
                    </div>
            </div>
        )
    }
}