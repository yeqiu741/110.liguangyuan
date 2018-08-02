import React,{Component} from 'react';
import './NavButton.css';
import { Button } from 'antd';
import {Link} from 'react-router'


export default class NavButton extends Component{

    render(){

        return(
            <div className="button_all">
                <div className="button1">
                    <Button className='huiZhong' type="Default">汇总</Button>
                    <Button className="sheButton" type="Danger">摄影课</Button>
                    <Button className='huiHuaKe' type="Default">绘画课</Button>
                </div>
                <div className="button2">
                <Link to='/' > <Button type="Default" >返回</Button></Link>
                </div>
            </div>
        )
    }
}