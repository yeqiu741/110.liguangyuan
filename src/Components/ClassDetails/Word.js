import React,{Component} from 'react'
import './word.css'
export default class Word extends Component{

    render(){
        const {words} = this.props;
        console.log(this.props)
        console.log({words})
        return(
            
             <p>班级：{words.name}&nbsp;&nbsp;&nbsp;&nbsp;班级ID：{words.id}&nbsp;&nbsp;&nbsp;&nbsp;老师：小白老师/ID:76544/微信：9767554&nbsp;&nbsp;&nbsp;&nbsp;负责员工：白帆/ID:98676/微信：fgg</p>
        )
    }
}