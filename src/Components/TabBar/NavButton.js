import React,{Component} from 'react';
import './NavButton.css';
import { Button } from 'antd';


export default class NavButton extends Component{

    render(){

        return(
            <div className="button_all">
                <div className="button1">
                    <Button type="Default">汇总</Button>
                    <Button className="sheButton" type="Danger">摄影课</Button>
                    <Button type="Default">绘画课</Button>
                </div>
                <div className="button2">
                    <Button type="Default">返回</Button>
                </div>
            </div>
        )
    }
}