import React,{Component} from 'react'
import './Message.css'
import { Avatar } from 'antd';
import { Switch } from 'antd';


export default class Message extends Component{

    render(){


        function onChange(checked) {
            console.log(`switch to ${checked}`);
          }



        return(
            <div className="message">
                <div className="message_left">
                    <span>{'No.745'}</span>
                    <Avatar className="avatar" shape="square" size="large" icon='user' />
                </div>
                <div className="message_middle">
                    <p>作业：拍摄一组静物</p>
                    <p>冰雪 mid:267511969 18期提高班|小X老师 点评人：XXX 提交时间：17：56</p>
                </div>
                <div className="message_right">
                    <span>佳作</span>{' '}<Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        )
    }
}