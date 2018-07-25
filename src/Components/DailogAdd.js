import React, {Component} from 'react';
<<<<<<< HEAD

=======
import '../WeChat.js';
>>>>>>> 7/25

export default class dailog_add extends Component{
    setMessage=()=>{
        this.props.conhandleMessage(this.refs.title.value,this.refs.description.value,this.refs.time.value);
    }
    render(){
        return(
            <div id="dailogAdd">
                <div id="dailogAddClose" onClick={this.props.dailogAdd}>close</div>
                <div id="dailogAddFrom">
                   姓名：<input type="text" ref="title"  className="title" /><br />
                   描述：<input type="text" ref="description"  className="description" /><br />
                   时间：<input type="text" ref="time"   className="time" /><br />
                    <input type="submit" onClick={this.setMessage}  className="submit" value="提交" />
                </div>
            </div>
        );
    }
}