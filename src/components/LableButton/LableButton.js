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
        const {message} = this.props
        const {departmentMessage}=this.props
        const {hadDepartment} =this.props
        return(
            <div className = "lableButton">
                <div className="divTitle">{message.title}</div>
                <p className="buttonButton" onClick={this.handleonClick} >{message.button}</p>
                <AuthorityManagement
                    message={message} 
                    isDailog = {this.state.isDailog}
                    onClick1={this.handleonClick}
                    departmentMessage={departmentMessage}
                    hadDepartment={hadDepartment}
                    handleonClickDailog={this.props.onDailog}
                />
            </div>
        )
    }
}

