import React,{Component} from 'react'
import LableButton from '../components/LableButton/LableButton';
import { connect  } from 'react-redux' 
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';



class Jurisdiction extends Component{
    

    renderLB=(title,entities,departmentInfo,Actions)=>{
        const rlb = title.map((item,idx)=>{
            return <LableButton key={idx} index={idx} item={item} entities={entities} departmentInfo={departmentInfo} Actions={Actions} />
        }) ;
        return rlb;
    }



    render(){
        const {entities,departmentInfo,Actions}=this.props
        // console.log(treeData)
        let {title} = departmentInfo
        title = Object.keys(title).map((item)=>{
            return title[item]
        })
        return(
            <div className="jurisdiction">
                <p className="title">点评权限</p>
                {this.renderLB(title,entities,departmentInfo,Actions)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const props = { ...state };
    console.log(props)
    return props;
}
  
const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jurisdiction);