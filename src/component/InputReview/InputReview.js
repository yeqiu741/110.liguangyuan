import React,{Component} from 'react'
import './InputReview.css'
import { Input } from 'antd';
import { List } from 'antd';

const Search = Input.Search;
const data = [];
export default class InputReview extends Component{

    render(){

        return(
            <div>
                <Search
                    className="serach"
                    placeholder="input search text"
                    enterButton="提交"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                <div className="title"><p>[110]这里是快捷回复</p>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
                
            </div>  
        )
    }
}