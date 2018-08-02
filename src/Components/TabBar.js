import React,{Component} from 'react';
import NavButton from '../Components/TabBar/NavButton.js';
import Tables from '../Components/TabBar/Tables.js';
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import Satifyaa from './TabBar/Satifyaa.js';



const TabPane = Tabs.TabPane;



class TabBar extends Component{


    render(){
        return(
            <Tabs className="tabs"  defaultActiveKey="1" >
                <TabPane className="bar" tab="课程信息" key="1">
                    <NavButton />
                    <Tables dataSource={this.props.LessonsList} dataSource1={this.props.historyLessonsList} /> 
                </TabPane>

                <TabPane className="bar" tab="满意度反馈" key="2">
                    <Satifyaa sta={this.props.sta} />
                </TabPane>
            </Tabs>
        )
    }
}
 function mapStateToProps(state){
    const {LessonsList,historyLessonsList}= state.tableList;
    const{sta} = state.sta;
    return {LessonsList,historyLessonsList,sta}
}
export default connect(mapStateToProps)(TabBar)
