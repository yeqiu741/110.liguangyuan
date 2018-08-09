import React,{Component} from 'react'
import './Switch.css'


export default class Switch extends Component{

    render(){

        return(
            <div class="switch1">  
                <div class="bgcon">  
                    <input id="checked_1" type="checkbox" className="switch" />  
                    <label for="checked_1"></label>  
                </div>  
            </div> 
        )
    }
}