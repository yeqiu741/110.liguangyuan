import React,{Component} from 'react'
import Progress from '../component/components/Progress/Progress'

export default class ProgressAll extends Component {

    state={
        isActionSheetActive:false,
    }
    handleShowActionSheet=()=>{
        this.setState({
            isActionSheetActive:true,
        })
    }
    render(){
        return(
            <div className="progress">
                <button onClick={this.handleShowActionSheet}>上传</button>
                <Progress isActive={this.state.isActionSheetActive}/>  
            </div>
            
        );
    }
}
