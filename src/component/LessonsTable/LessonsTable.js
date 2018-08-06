import React, { Component } from 'react'
import { Table,Button } from 'antd'
import { browserHistory } from 'react-router';
import './LessonsTable.css'

class LessonsTable extends Component { 
  handleReturn = () => {
    browserHistory.go(-1)
  }
  renderState = (state) => {
    switch(state){
      case -1:
        return <span aria-labelledby='jsx-a11y/accessible-emoji' role='img'>➖</span>
      case 1:
        return <span aria-labelledby='jsx-a11y/accessible-emoji' role='img'>✅</span>
      case 0:
        return <span aria-labelledby='jsx-a11y/accessible-emoji' role='img'>❌</span>
      default:
        return <span>{state}</span>
    }
  }
  renderScore = (score) => {
    let className
    if (score > 4) {
      className = 'good'
    } else {
      className = 'not-good'
    }
    return <span className={className}>{`${score}`}</span>
  }
  render() {
    const { list } = this.props
    
    const columns = [{
      title: '课程内容',
      dataIndex: 'course_name',
      align: 'center',
    }, {
      title: '上课时间',
      dataIndex: 'time',
      align: 'center',
    }, {
      title: '上课情况',
      dataIndex: 'enter_status',
      align: 'center',
      render: this.renderState
    }, {
      title: '作业提交情况',
      dataIndex: 'homework_status',
      align: 'center',
      render: this.renderState
    }, {
      title: '被点评情况',
      dataIndex: 'review_status',
      align: 'center',
      render: this.renderState
    }, {
      title: '打卡情况',
      dataIndex: 'clockin_status',
      align: 'center',
      render: this.renderState
    }, {
      title: '满意度评分',
      dataIndex: 'satisfied_score',
      align: 'center',
      render: this.renderScore
    }];
    return (
      <div className="table-wrapper-noBorder">
        <Button  onClick={this.handleReturn}>返回</Button>
        <Table 
          rowKey={record => record.course_name} 
          dataSource={list} 
          columns={columns} 
          pagination={false} 
          bordered
        />
      </div>
    )
  }
}

export default LessonsTable