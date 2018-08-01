import React, {Component} from 'react'
import Header from '../Components/Header.js';
import TabBar from '../Components/TabBar.js';
import { connect } from 'react-redux'
import * as api from '../api/index'
import '../middleware/serverApi'

class Op extends Component{

    componentDidMount(){
        const { dispatch } = this.props;
        console.log("声明周期"+this.props)
        api.fetchlesson(dispatch);
        api.fetchuser(dispatch);
    }

    render(){
        console.log('啦啦啦，执行到Op.js的render方法了')
        return(
            <div className="App">
                <Header message = {this.props.headerList.message} />
                <TabBar /> 
            </div>
        )
    }
}

function mapStateToProps(state){
    const {
        tableList,
        headerList
    } = state;
    const props = {
        tableList,
        headerList
    }

    return props;
}

export default connect(mapStateToProps)(Op)