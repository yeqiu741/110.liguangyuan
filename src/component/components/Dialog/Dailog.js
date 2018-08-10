import React,{Component} from 'react'
import './Dailog.css'

export default class Dailog extends Component{
    constructor(props){
        super(props)
        this.state={
            dailog:false,
            title:'',
            content:'',
            onCancel: () => {}
        }
    }
    dailog=()=>{
        if(!this.props.dailog){
            return 'dailog'
        }
        return 'ios_first'
    }
    dailogButton=()=>{
        this.setState({
            dailog:true,
            title:'',
            content:'',
            onCancel: () => {}
        })
    }
    render(){
        const {title,content} =this.props;
        return(
            
                    <div className={this.dailog()} onClick={this.props.onCancel}>
                        <div className="ios_first_content">
                            <div className="ios_first_content_p">
                                <p className="p_title">{title}</p>
                                <p className="p_content">{content}</p>
                            </div>
                            <div className="ios_first_content_button">
                                <button onClick={this.props.onCancel} className="button_2">辅助操作</button>
                                <button onClick={this.props.onCancel} className="button_1">主操作</button>
                            </div>
                        </div>
                    </div>
                
        )
    }
}