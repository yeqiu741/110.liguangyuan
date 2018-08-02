import React, {Component} from 'react'
import Header from '../Components/Header.js';
import TabBar from '../Components/TabBar.js';
import { connect } from 'react-redux'
import * as api from '../api/index'
import '../middleware/serverApi'



class Op extends Component{

    componentDidMount(){
        const { dispatch } = this.props;
        api.fetchlesson(dispatch);
        api.fetchuser(dispatch);
        api.fetchsta(dispatch);
    }

    render(){
        return(
            <div className="App">
                <Header message = {this.props.headerList.message} />
                <TabBar sta = {this.props.sta} /> 
            </div>
        )
    }
}

function mapStateToProps(state){
    const {
        tableList,
        headerList,sta
  
    } = state;
    console.log({sta})
    console.log(state)
    const props = {
        tableList,
        headerList,sta

    }

    return props;
}

export default connect(mapStateToProps)(Op)