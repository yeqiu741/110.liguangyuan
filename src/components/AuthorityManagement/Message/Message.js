import React,{Component} from 'react'
import './Message.css'

export default class Message extends Component{

    render(){
        const {item} = this.props
        const { dailog } = this.props
        console.log(this.props)
        const handleDailog = ()=>{
            if(!dailog){
                return 'handleMessageBox'
            }
            return 'dailog'
        }
        return(
            <div className={handleDailog()}>
                <div>{item.name}{' '}mid:{item.mid}</div>
            </div>
        )
    }
}