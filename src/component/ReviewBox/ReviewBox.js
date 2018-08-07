import React,{Component} from 'react'
import './ReviewBox.css'
import { Carousel } from 'antd';
import  Message from '../Message/Message'
import InputReview from '../InputReview/InputReview'
import { List } from 'antd';

const icon = require('../../img/0.jpg')

export default class ReviewBox extends Component{

    render(){
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
          ];
        return(
            <div className="notreview">
                <div className="notreview_left">
                    
                <Carousel autoplay>
                    <div><img src={icon} alt="图片加载失败！" /></div>
                    <div><img src={icon} alt="图片加载失败！" /></div>
                    <div><img src={icon} alt="图片加载失败！" /></div>
                </Carousel>
                <Message />
                <InputReview />
                </div>

                <div className="notreview_right">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description=""
                        />
                    </List.Item>
                    )}
                />
                </div>
            </div>
        )
    }
}