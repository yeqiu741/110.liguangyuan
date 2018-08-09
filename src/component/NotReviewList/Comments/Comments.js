import React,{Component} from 'react'
import './Comments.css'
import moment from "moment"
/********************************************************************************** 
//import { bindActionCreators } from 'react-redux'
//import  returnActions from '../../../actions/return'
import { connect } from 'react-redux'
import  * as dispatch from  '../../../actions/return'
/********************************************************************************** */ 




export default class Comments extends Component{


    onClickReturn=(id)=>{
        console.log('人傻钱多');
        /********************************************************************************** 
        const {dispatch} =this.props;
        console.log(this.props)
        console.log(dispatch)
            dispatch.returnReason(id)
        /********************************************************************************** */
    }



    render(){  
        const {item} = this.props;
        console.log(this.props)
        const time = item.time
        const newTime  = moment(parseInt(time,10)).format('MM/DD HH:mm');
        if(item.commentator)
        {
             if(item.status === 'reject')//如果报错，请把三个等于号变成两个等于号
            {
                return(
                    <li>
                        <div className="comments_title">
                            <p><span className="comments_title_left">{item.nick}{' '}({item.commentator.role}{':'}{' '}{item.commentator.nick})</span><span className="comments_title_right">{ newTime}</span></p>
                        </div>
                        <div className="comments_content">
                            <p>{item.content}</p>
                            <p className="red">（消息已被退回，被退回原因：{item.reason}）</p>
                        </div>
                    </li>
                    )
            }
             else if(item.status === 'unrevised')//如果报错，请把三个等于号变成两个等于号
            {
                return(
                    <li>
                        <div className="comments_title">
                            <p><span className="comments_title_left">{item.nick}{' '}({item.commentator.role}{':'}{' '}{item.commentator.nick})</span><span className="comments_title_right">{ newTime}</span></p>
                        </div>
                        <div className="comments_content">
                            <p>{item.content}</p>
                            <button className="tuihui" onClick={this.onClickReturn(item.id)}>退回</button>
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
 /********************************************************************************** 
function mapStateToProps(state,ownprops){
    return state
}
function mapDispatchToProps(dispatch){
    return dispatch
    console.log(dispatch)
} 
connect(mapStateToProps,mapDispatchToProps)(Comments)
 /********************************************************************************** */
