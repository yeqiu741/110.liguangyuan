import React,{Component} from 'react';
import './Tables.css';
import {Table} from 'antd';
import { columns } from './list'


export default class Tables extends Component{
    
    render(){
        const { dataSource ,dataSource1} = this.props;
        return(
            <div>
                <div className="table1">
                    <p >在学课程</p>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <div className="table2">
                    <p>历史数据</p>
                    <Table dataSource={dataSource1} columns={columns} />
                </div>
            </div>
        )
    }
}

