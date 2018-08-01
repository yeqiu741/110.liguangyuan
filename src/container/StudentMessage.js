import React, {Component} from 'react'
import TopButton from '../Components/StudentMessage/TopButton'
import Tables from '../Components/StudentMessage/Table'
import { connect } from 'react-redux'
import * as api from '../api/index'
import './StudentMessage.css'

class StudentMessage extends Component{
    componentDidMount(){
        const { dispatch } = this.props;
        console.log("声明周期"+this.props)
        api.fetchsmsg(dispatch);
    }

    render(){

        return(
            <div className="studentBox">
                <TopButton />
                <Tables message = {this.props.smsg.smsg}  /> 
            </div>
        )
    }
}

function mapStateToProps(state){
    const { smsg,tableList,headerList } = state;
    const props = {smsg, tableList,headerList}
    console.log(props)
    return props;
}
export default connect(mapStateToProps)(StudentMessage)