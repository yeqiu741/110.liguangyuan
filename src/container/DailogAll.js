import React,{Component} from 'react'
import Dailog from '../component/components/Dialog/Dailog';


export default class DailogAll extends Component{
    
       state={
            dailog:false,
            title:'',
            content:'',
            onCancel: () => {}
        }
   
    handleOnClickFirst=()=>{
        this.setState({
            dailog:true,
            title:'这是一个有趣的标题1',
            content:'我也不知道要填什么内容1'
        });
    }

    handleOnClickFirst1=()=>{
        this.setState({
            dailog:true,
            title:'这是一个有趣的标题2',
            content:'我也不知道要填什么内容2'
        });
    }
    handleOnClickFirst2=()=>{
        this.setState({
            dailog:true,
            title:'这是一个有趣的标题3',
            content:'我也不知道要填什么内容3'
        });
    }
    handleOnClickFirst3=()=>{
        this.setState({
            dailog:true,
            title:'这是一个有趣的标题4',
            content:'我也不知道要填什么内容4'
        });
    }
    handleHideActionSheet=()=>{
        this.setState({
            dailog:false
        })
    }
    render(){

        return(
            <div>
                <button onClick={this.handleOnClickFirst}>iOS Dailog样式一</button>
                <button onClick={this.handleOnClickFirst1}>iOS Dailog样式二</button>
                <button onClick={this.handleOnClickFirst2}>Android Dailog样式一</button>
                <button onClick={this.handleOnClickFirst3}>Android Dailog样式二</button>
                <Dailog
                    title={this.state.title}
                    content={this.state.content}
                    dailog={this.state.dailog}
                    onCancel={this.handleHideActionSheet}
                />
            </div>
        )
    }
}
