import React,{Component} from 'react'
import { Button } from 'antd';
import './TopButton.css'
import { Input } from 'antd';
import * as actionCreators  from '../../actions';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

const Search = Input.Search;


class TopButoon extends Component{

    render(){
        const {Actions} = this.props;
        return(
            <div className="Top_Button">
                <div className="Top_Button_1" >
                    <Button className="huizong"  type="Default">汇总</Button>
                    <Button className="sheying"  type="Danger">摄影课</Button>
                    <Button className="huihua"  type="Default">绘画课</Button>
                </div>
                <div className="serch">
                    <Search
                        placeholder="MID"
                        enterButton="搜索"
                        size="middle"
                        onSearch={value => Actions.fetchSearch(value)}
                    />
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state,ownProps){
    const {smsg,tableList,headerList,Cdetails} = state;
    const props = {smsg,tableList,headerList,Cdetails}
    return props;
}
const mapDispatchToProps = dispatch =>{
    console.log(dispatch)
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
    }
}

export default connect(mapDispatchToProps,mapStateToProps)(TopButoon)