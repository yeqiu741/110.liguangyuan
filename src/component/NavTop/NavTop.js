import React,{Component} from 'react'
import { Input, Select} from 'antd';
import './NavTop.css'



const Search = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;


export default class NavTop extends Component{

    render(){

        return(
            <div className="navtop">
                <div className="navtop_left">
                    <div>周围</div>
                    <button>我的被退回</button>
                </div>
                <div className="navtop_right">
                    <InputGroup className="navtop_right_serach" compact>
                        <Select className="navtop_right_select" defaultValue="MID">
                            <Option value="MID">MID</Option>
                            <Option value="name">姓名</Option>
                        </Select>
                        <Search
                        className="navtop_right_serach"
                            placeholder="MID/姓名/关键词"
                            onSearch={value => console.log(value)}
                            style={{ width: '80%' }}
                        />
                    </InputGroup>
                </div>
            </div>
        )
    }
}