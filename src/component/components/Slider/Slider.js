import React,{Component} from 'react'
import './Slider.css'

export default class Slider extends Component{
    handleOnClck
    render(){
    
        return(

            <div className="slider">
                <div className="slider_line" onClick={this.handleOnClck}><div className="slider_cirle"></div></div>
                
            </div>
        )
    }
}