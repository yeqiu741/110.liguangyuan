import React, { Component } from 'react';
import './LableButton.css'
import AuthorityManagement from '../AuthorityManagement/AuthorityManagement';




export default class LableButton extends Component{
    state={
        isDailog:false,
    }
    handleonClick=()=>{
        this.setState({
            isDailog:!this.state.isDailog
        })
    }
    render(){
        const {entities,departmentInfo,Actions,item,index} = this.props
        let {title} = departmentInfo
        title = Object.keys(title).map((item)=>{
            return title[item]
        })
        console.log(index)
        return(
            <div className = "lableButton">
                <div className="divTitle">{item.title}{' '}:{' '}{item.description} </div>
                <p className="buttonButton" onClick={this.handleonClick} >权限管理</p>
                <AuthorityManagement
                    entities = {entities}
                    departmentInfo = {departmentInfo}
                    Actions = {Actions}
                    isDailog={this.state.isDailog}
                    onClick1={this.handleonClick}
                    item={title[index]}
                />
            </div>
        )
    }
}

