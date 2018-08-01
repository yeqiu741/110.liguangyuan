import React,{Component} from 'react';
import NavButton from '../Components/TabBar/NavButton.js';
import Tables from '../Components/TabBar/Tables.js';
import { Tabs } from 'antd';
import { connect } from 'react-redux'



const TabPane = Tabs.TabPane;



class TabBar extends Component{


    render(){
        return(
            <Tabs className="tabs"  defaultActiveKey="1" >
                <TabPane className="bar" tab="课程信息" key="1">
                    <NavButton />
                    <Tables dataSource={this.props.LessonsList} dataSource1={this.props.historyLessonsList} /> 
                </TabPane>
                <TabPane className="bar" tab="满意度反馈" key="2"></TabPane>
            </Tabs>
        )
    }
}
function mapStateToProps(state){
    const {LessonsList,historyLessonsList}= state.tableList;
    console.log(state.tablelist)
    return {LessonsList,historyLessonsList}
}
export default connect(mapStateToProps)(TabBar)
