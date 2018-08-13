import React,{Component} from 'react'
import './AuthorityManagement.css'
import { Input } from 'antd';
import { Tree ,Icon } from 'antd';
import Message from './Message/Message';

const TreeNode = Tree.TreeNode;

const Search = Input.Search;



export default class AuthorityManagement extends Component{

   


    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    
    
    renderall =(departmentMessage,dailog1)=>{
        const ra = (departmentMessage.allDepartmentInfp||[]).map((item ,idx)=>{
            return <Message key={idx} item={item}  />
        });
        return ra;
    }
    renderguang =(departmentMessage,dailog1)=>{
        const ra = (departmentMessage.guangzhou||[]).map((item ,idx)=>{
            return <Message key={idx} item={item} />
        });
        return ra;
    }
    renderchan =(departmentMessage,dailog1)=>{
        const ra = (departmentMessage.chanpin||[]).map((item ,idx)=>{
            return <Message key={idx} item={item} />
        });
        return ra;
    }
    renderkaif =(departmentMessage,dailog1)=>{
        const ra = (departmentMessage.kaifaFirst||[]).map((item ,idx)=>{
            return <Message key={idx} item={item}  />
        });
        return ra;
    }
    renderkais =(departmentMessage,dailog1)=>{
        const ra = (departmentMessage.kaifaSecond||[]).map((item ,idx)=>{
            return <Message key={idx} item={item}  />
        });
        return ra;
    }
    renderhd =(hadDepartment)=>{
        const hd = (hadDepartment||[]).map((item ,idx)=>{
            return <Message key={idx} item={item}  />
        });
        return hd;
    }





    render(){
        const { message ,isDailog } = this.props
        const {departmentMessage}  = this.props
        const {hadDepartment} =this.props
        
        const handleDailog = ()=>{
        if(!isDailog){
                return 'dailog'
            }
            return 'authorityManagement'
        }
        return(
            <div className={handleDailog()}>
                <div className="authorityManagement_title">{message.title}<Icon className="icon" spin="true" type="close" onClick={this.props.onClick1} /></div>

                <div className="authorityManagement_box">
                    <div className="flex authorityManagement_box_left">
                        <div className="authorityManagement_box_left_top">
                            <button className="button">删除</button>
                            <Search
                                placeholder="名字"
                                enterButton="搜索"
                                size="small"
                                className="search"
                                onSearch={value => console.log(value)}
                            />
                        </div>

                        <div className="authorityManagement_box_left_bottom">
                            {this.renderhd(hadDepartment)}
                        </div>
                    </div>

                    <div className="flex authorityManagement_box-middle">
                        <Tree
                            showLine
                            defaultExpandedKeys={['0-0-0']}
                            onSelect={this.onSelect}
                        >
                            <TreeNode title="所有部门" onClick={this.props.handleonClickDailog} key="0">
                                <TreeNode title="爱奇迪集团" key="0-0">
                                    <TreeNode title="广州分公司" key="0-0-0">
                                        <TreeNode title="产品研发部" key="0-0-0-0" >
                                            <TreeNode title="开发一组" key="0-0-0-1" />
                                            <TreeNode title="开发二组" key="0-0-0-2" />
                                        </TreeNode>
                                    </TreeNode>
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>

                    <div className="flex authorityManagement_box_right">
                        <div className="searchBox">
                            <Search
                                placeholder="名字"
                                enterButton="搜索"
                                size="small"
                                className="search1"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                        <div className="messageBox">
                            {this.renderall(departmentMessage)}
                            {this.renderguang(departmentMessage)}
                            {this.renderchan(departmentMessage)}
                            {this.renderkaif(departmentMessage)}
                            {this.renderkais(departmentMessage)}
                        </div>
                    </div>
                </div>
                <div className="enterButton"><button>确认</button></div>
            </div>
        )
    }
}