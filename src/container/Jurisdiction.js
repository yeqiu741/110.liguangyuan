import React,{Component} from 'react'
import LableButton from '../components/LableButton/LableButton';
import { connect  } from 'react-redux' 
import { bindActionCreators } from 'redux';
import * as changePeopleInfo from '../actions/index'

class Jurisdiction extends Component{
    

    render(){
        const { 
            lableButton1,
            lableButton2, 
            departmentMessage,
            hadDepartment
        } = this.props

        
        return(
            <div className="jurisdiction">
                <p className="title">点评权限</p>
                <LableButton
                    message={lableButton1}
                    departmentMessage={departmentMessage}
                    onDailog={this.handleonClickDailog}
                    hadDepartment={hadDepartment}
                />
                <LableButton
                    message={lableButton2}
                    departmentMessage={departmentMessage}
                    onDailog={this.handleonClickDailog}
                    hadDepartment={hadDepartment}
                />
            </div>
        )
    }
}

function mapStateToProps (state,ownstate){
    const { 
            feature:{
                lableButton1,
                lableButton2
            } ,
            departmentMessage,
            hadDepartment

    } = state;
    return { 
        lableButton1,
        lableButton2,
        departmentMessage,
        hadDepartment
       } 
}
function mapDispatchToProps (dispatch){
    return{
        changePeopleInfo:bindActionCreators(changePeopleInfo,dispatch)
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Jurisdiction)