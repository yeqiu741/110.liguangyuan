import React,{Component} from 'react'
import './ReviewList.css'
import { Tabs } from 'antd';
import NotReview from '../NotReview/NotReview';

const TabPane = Tabs.TabPane;


export default class ReviewList extends Component{
    
    render(){
            
            const tab1 = (text1,text2)=>{
                return(
                    <div>我的未点评:{text1}{" "}今日已点评：{text2}</div>
                )
            }
            const tab2 = (text1,text2)=>{
                return(
                    <div>我的点评历史:{text1}{" "}今日未点评：{text2}</div>
                )
            }
            const tab3 = (text)=>{
                return(
                    <div>全部未点评{text}</div>
                )
            }
            const tab4 = (text)=>{
                return(
                    <div>全部已点评{text}</div>
                )
            }
        return(
            <div className="reviewList">
                <Tabs  type="card">
                    <TabPane tab={tab1()} key="1">
                        <NotReview />
                    </TabPane>
                    <TabPane tab={tab2()} key="2">
                        <NotReview />
                    </TabPane>
                    <TabPane tab={tab3()} key="3">
                        <NotReview />
                    </TabPane>
                    <TabPane tab={tab4()} key="4">
                        <NotReview />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}