import React,{Component} from 'react';
import './Tables.css';
import {Table} from 'antd';
import { connect } from 'react-redux'






class Tables extends Component{
    
    render(){
        const {dataSource,columns,dataSource1,columns1} = this.props;
        console.log(dataSource,columns,dataSource1,columns1);
        return(
            <div>
                <div className="table1">
                    <p >在学课程</p>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <div className="table2">
                    <p>历史数据</p>
                    <Table dataSource={dataSource1} columns={columns1} />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state,ownProps){
    const { dataSource,columns,dataSource1,columns1 } = state;
    console.log({dataSource,columns,dataSource1,columns1});
    console.log(state);
    return {dataSource,columns,dataSource1,columns1};
}

export default connect(mapStateToProps)(Tables);