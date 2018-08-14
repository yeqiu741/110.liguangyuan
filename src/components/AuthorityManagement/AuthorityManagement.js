import React,{Component} from 'react'
import './AuthorityManagement.css'
import { Icon } from 'antd';
import LeftDelete from './LeftDelete/LeftDelete';
import MiddleTree from './MiddleTree/MiddleTree';
import RightAdd from './RightAdd/RightAdd';



export default class AuthorityManagement extends Component{

   
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    addperson=()=>{
        const {Actions,departmentInfo}=this.props
        const { currentView ,selectList} = departmentInfo
        const data={
            currentView,
            selectList
        }
        Actions.filterHandleLoad('')
        Actions.filterHandleResult('')
        Actions.addperson(data)
    }
    render(){
        const {isDailog } = this.props
        const {entities,departmentInfo,Actions,item} = this.props
        const handleDailog = ()=>{
        if(!isDailog){
                return 'dailog'
            }
            return 'authorityManagement'
        }
        return(
            <div className={handleDailog()}>
                <div className="authorityManagement_title">
                    {item.title}{' '}:{' '}{item.description}
                    <Icon className="icon" spin="true" type="close" onClick={this.props.onClick1} />
                </div>

                <div className="authorityManagement_box">
                    <LeftDelete 
                        entities={entities}
                        departmentInfo={departmentInfo}
                        Actions={Actions}
                    />
                    <MiddleTree
                    entities={entities}
                        departmentInfo={departmentInfo}
                        Actions={Actions}
                    />
                    <RightAdd 
                        entities={entities}
                        departmentInfo={departmentInfo}
                        Actions={Actions}
                    /> 
                </div>

                <div className="enterButton"><button onClick={this.addperson}>确认</button></div>
            </div>
        )
    }
}