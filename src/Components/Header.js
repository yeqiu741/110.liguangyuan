import React,{Component} from 'react';
import './Header.css';
import { Avatar } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd'

export default class Header extends Component{
   

    render(){
        const { message } = this.props;
        return(
            <div id="header">
                <Avatar className="header_bar" shape="square" size="large" icon="user" src={message.hurl} />
                <p className="SI">{message.nick}</p>
                <div className="header_all">
                    <div className="header_title_box">
                        <p><span >学员编号：</span>{message.mid}</p>
                        <p><span>在学课程：</span>{message.learningLesson}</p>
                        <p><span>入学时间：</span>{message.lastLoginDate}</p>
                    </div>
                    <div className="header_title_box">
                        <p><span>历史付费额：</span>{message.history_pay}</p>
                        <p><span>累计学习天数：</span>{message.totalLearningDays}</p>
                        <p><span>最后登登录时间：</span>{message.lastLoginDate}</p>
                    </div>
                    <div className="header_title_box">
                        <p><span>手机号码：</span>{message.tel}&nbsp;&nbsp;&nbsp;&nbsp;<Icon className="headerIcon" type="file-text" /></p>
                        <p><span>微信号码：</span><Input size="small" className="button3" placeholder={message.weiChatCode} /> 
                        <Button className="button4" >提交</Button><br /></p>
                        <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注：</span>{message.remark} <Input size="small" className="button3" placeholder={message.remark} />
                        <Button className="button4">提交</Button></p>
                    </div>
                </div>      
            </div>
        )
    }
}