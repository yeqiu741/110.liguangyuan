import React,{Component} from 'react';
import NavButton from '../Components/TabBar/NavButton.js';
import Tables from '../Components/TabBar/Tables.js';
import './TabBar.css';
import { Tabs } from 'antd';



const TabPane = Tabs.TabPane;



export default class TabBar extends Component{


    render(){
        return(
            <Tabs className="tabs"  defaultActiveKey="1" >
                <TabPane className="bar" tab="课程信息" key="1">
                    <NavButton />
                    <Tables /> 
                </TabPane>
                <TabPane className="bar" tab="满意度反馈" key="2"></TabPane>
            </Tabs>
        )
    }
}