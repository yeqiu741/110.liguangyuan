import React,{Component} from 'react'
import './Comments.css'
import moment from "moment"






export default class Comments extends Component{
    onClickReturn=()=>{
        console.log('人傻钱多');
        /*
        const item = {
            
        }
        
        */
    }

    render(){
        const {item} = this.props;
        console.log(this.props)
        const time = item.time
        const newTime  = moment(parseInt(time,10)).format('MM/DD HH:mm');
        if(item.commentator)
        {
            if(item.reason)
            {
                return(
                    <li>
                        <div className="comments_title">
                            <p><span className="comments_title_left">{item.nick}{' '}({item.commentator.role}{':'}{' '}{item.commentator.nick})</span><span className="comments_title_right">{ newTime}</span></p>
                        </div>
                        <div className="comments_content">
                            <p>{item.content}</p>
                            <p className="red">（被退回原因：{item.reason}）</p>
                        </div>
                    </li>
                    )
            }
            else
            {
                return(
                    <li>
                        <div className="comments_title">
                            <p><span className="comments_title_left">{item.nick}{' '}({item.commentator.role}{':'}{' '}{item.commentator.nick})</span><span className="comments_title_right">{ newTime}</span></p>
                        </div>
                        <div className="comments_content">
                            <p>{item.content}</p>
                            <button className="tuihui" onClick={this.onClickReturn}>退回</button>
                        </div>
                    </li>
                    )
            }
            
        }
        else
        {
            return(
                <li>
                    <div className="comments_title">
                        <p><span className="comments_title_left">{item.nick}{' '}{'mid:'+item.mid}</span><span className="comments_title_right">{ newTime}</span></p>
                    </div>
                    <div className="comments_content">
                        <p>{item.content}</p>
                    </div>
                </li>
            )
        }
        
    }
}