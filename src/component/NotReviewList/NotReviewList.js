import React,{Component} from 'react'
import './NotReviewList.css'
import { Carousel } from 'antd';
import InputReview from '../InputReview/InputReview'
import ImgList from './ImgList/ImgList'
import { Avatar } from 'antd';
import { Switch } from 'antd';
import Comments from './Comments/Comments'


export default class NotReviewList extends Component{

    renderImgList = (icon)=>{
        const ril = icon.map((item,idx)=>{
            return <ImgList key={idx} item={item} />
        });
        return ril;
    }




    renderComments = (comments)=>{
        const rc = comments.map((item ,idx)=>{
            return (
                <Comments key={idx} item={item} />
            )
        });
        return rc;
    }
    render(){
        const {item} = this.props;
        const icon = item.photos;
        const author = item.author;
        const teacherInfo = item.teacherInfo;
        const comments = item.comments;
        function onChange(checked) {
            console.log(`switch to ${checked}`);
        }
      
      


        return(
            <li className="notreview">
                <div className="notreview_left">
                    <Carousel className="imgBox" autoplay>
                        {this.renderImgList(icon)}
                    </Carousel>




                    <div className="message">
                        <div className="message_left">
                            <span>No.{item.id}</span>
                            <Avatar className="avatar" shape="square" size="large" src={icon[1]} />
                        </div>
                        <div className="message_middle">
                            <p>作业：{item.description}</p>
                            <p>{author.nick} mid:{author.mid} {' '}{item.classInfo.id} {item.classInfo.name}|{item.commentator} 点评人：{teacherInfo.nick} 提交时间：{item.time}</p>
                        </div>
                        <div className="message_right">
                            <span>佳作</span>{' '}<Switch defaultChecked={item.isExcellent} onChange={onChange} />
                        </div>
                    </div>



                    <InputReview />
                </div>


                <div className="notreview_right">{/* 右边点评列表*/}
                    <ul>
                        {this.renderComments(comments)}
                    </ul>
                </div>
            </li>
        )
    }
}