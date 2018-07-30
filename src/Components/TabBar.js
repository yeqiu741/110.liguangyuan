import React,{Component} from 'react';

import './TabBar.css';
import { Tabs } from 'antd';



const TabPane = Tabs.TabPane;



export default class TabBar extends Component{

    render(){
        
        return(
            <div>
            <Tabs className="tabs" defaultActiveKey="1" >
                <TabPane tab="课程信息" key="1"></TabPane>
                <TabPane tab="满意度反馈" key="2"></TabPane><hr />
            </Tabs>
            </div>
        )
    }
}