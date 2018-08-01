import React,{Component} from 'react'
import { Table} from 'antd';
import './TableDetails.css'
import { Icon } from 'antd'

const columns = [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',
  }, {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    render:text=>{
        if(text === '1'){
            return(
                <div><Icon type="check" /></div>
            )
        }
        else{
            return(
                <div><Icon type="close" /></div>
            )
        }
    }
  }, {
    title: '作业提交情况',
    key: 'homework_status',
    dataIndex:'homework_status',
    render:text=>{
        if(text==='1'){
            return(
                <div><Icon type="check" /></div>
            )
        }
        else{
            return(
                <div><Icon type="close" /></div>
            )
        }
    }
  }, {
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    render:text=>{
        if(text===1)
            return(<div><Icon type="check" /></div>)
        else if(text===0)
            return(<div><Icon type="close" /></div>)
        else
            return(<div><Icon type="minus" /></div>)      
    }
  }, {
    title: '打卡情况',
    key: 'clockin_status',
    dataIndex:'clockin_status',
    render:text=>{
        if(text===1){
            return(
                <div><Icon type="check" /></div>
            )
        }
        else{
            return(
                <div><Icon type="close" /></div>
            )
        }
    }
  }, {
    title: '满意度评分',
    key: 'satisfied_score',
    dataIndex:'satisfied_score',
    render:text=>{
        if(text < 5)
        return(
            <span className="red">{text}</span>
        )
        return text
    }
  }];


export default class TableDetails extends Component{

    render(){
        const {message} = this.props;
        return(
            <Table columns={columns} dataSource={message} />
        )
    }
}