import React,{Component} from 'react'
import TableDetails from '../Components/ClassDetails/TableDetails.js'
import './ClassDetails.css'
import * as api from '../api/index'
import { connect } from 'react-redux'
import Word from '../Components/ClassDetails/Word'

class classDetails extends Component{
    componentDidMount(){
        const { dispatch } = this.props;
        console.log("声明周期"+this.props)
        api.fetchcds(dispatch);
    }

    render(){

        return(
            <div className="calssDeatils">
                <Word words = {this.props.Cdetails.cds} />
                <TableDetails message = {this.props.Cdetails.list} />
            </div>
        )
    }
}


function mapStateToProps(state){
    const {smsg,tableList,headerList,Cdetails} = state;
    const props = {smsg,tableList,headerList,Cdetails}
    console.log(Cdetails)
    return props;
}

export default connect(mapStateToProps)(classDetails)