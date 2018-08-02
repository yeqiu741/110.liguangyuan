import React,{Component} from 'react'
import './Table.css'
import { Table} from 'antd'
import { Link  } from 'react-router'

const columns = [
    {
        title:'',
        dataIndex:'hurl',
        key:'hurl',
        render:text=>{
            return(
                <div><img  src={text} alt="图片加载失败！"/></div>
            )
        }
    }
    ,{
    title: '学员名',
    dataIndex: 'nick',
    key: 'nick',
  }, {
    title: '学员编号/MID',
    dataIndex: 'mid',
    key: 'mid',
    render:text=>{
    return(<Link to={`/Op/${text}`}>{text}</Link>)
    }
  }, {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
  }, {
    title: '开课时间',
    key: 'start_time',
    dataIndex: 'start_time'
  },
  {
    title: '在学课程',
    key: 'learning_lessons',
    dataIndex: 'learning_lessons',
    render:text=>{
        if (text==''){
            return(<span>无</span>)
        }
        return text.join('  ')
    }
    
  },
  {
    title: '负责老师',
    key: 'teachers',
    dataIndex: 'teachers',
    render:text=>{
        if (text==''){
            return(<span>无</span>)
        }
        return text.join('  ')
    }
  }
];


export default class Tables extends Component{

    render(){
    
        const {message} = this.props;
        return(
            <div className="tables">
                <Table columns={columns} dataSource={message} />
            </div>
         
        )
    }
}
