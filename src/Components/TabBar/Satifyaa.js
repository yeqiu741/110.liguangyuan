import React,{Component} from 'react'
import {Table} from 'antd';

export default class Satifyaa extends Component{

    render(){
       
            const {sta} = this.props;
  
        const columns6 = [{
            title: '教程',
            dataIndex: 'course_name',
            key: 'course_name',
          }, {
            title: '开课时间',
            dataIndex: 'time',
            key: 'time',
          }, {
            title: '老师',
            dataIndex: 'teacher_info',
            key: 'teacher_info',
          }, {
            title: '满意度评分',
            dataIndex: 'statisfied_score',
            key: 'statisfied_score',
            render:text=>{
                if(text<5)
                return(
                    <span className="red">{text}</span>
                )
                return {text}
            }
          }, {
            title: '具体反馈',
            dataIndex: 'satisfied_detail',
            key: 'satisfied_detail',
          }, {
            title: '操作',
            dataIndex:"待回复"
          }];
        return(
            <div className="table1">
                <Table dataSource={sta} columns={columns6} />
            </div>
        )
    }
}

