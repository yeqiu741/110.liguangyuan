import React, {Component} from 'react';
import Photo from './Photo';
import './TabList';
import './ColorList.css';


export default class ColorList extends Component{

    render(){
               
        return(
            <ol>
			    <li className="colorList"><div className="colorRed"><Photo flag={this.props.dailog}/></div></li>
				<li className="colorList"><div className="colorBlack"><Photo flag={this.props.dailog} /></div></li>
				<li className="colorList"><div className="colorYellow"><Photo flag={this.props.dailog} /></div></li>
				<li className="colorList"><div className="colorPurple"><Photo flag={this.props.dailog} /></div></li>
			</ol>
        )
    }
}