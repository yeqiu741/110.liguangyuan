import React,{Component} from 'react'
import { Button } from 'antd';
import './TopButton.css'
import { Input } from 'antd';
import {  Select } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;




export default class TopButoon extends Component{

    render(){
        return(
            <div className="Top_Button">
                <div className="Top_Button_1" >
                    <Button className="huizong"  type="Default">汇总</Button>
                    <Button className="sheying"  type="Danger">摄影课</Button>
                    <Button className="huihua"  type="Default">绘画课</Button>
                </div>
                <div className="Top_Button2">    
                    <InputGroup  compact>
                        <Select  defaultValue="mid">
                            <Option value="">m</Option>
                        </Select>
                        <Input  style={{ width: '60%'}} defaultValue="MID" />
                    </InputGroup>
                    <Button className="serch" >搜索</Button>
                </div>
                
            </div>
        )
    }
}