import React,{Component} from 'react'
import { Input } from 'antd'
import ButtonList from '../ButtonList/ButtonList'


const Search = Input.Search

export default class RightAdd extends Component{


    renderBtn = (person,itemGroup,Actions,currentSelect, filterHandleLoad,currentView,selectList,deleteSelectList) => {
        filterHandleLoad=Number(filterHandleLoad)
        if (filterHandleLoad != '' && itemGroup[currentSelect].person.indexOf(filterHandleLoad) != -1) {
            const person1={
                name:person[filterHandleLoad].name,
                mid:person[filterHandleLoad].mid,
                substitute:person[filterHandleLoad].substitute,
                comment:person[filterHandleLoad].comment,
            }
            return <ButtonList
            person={person1} 
            currentView={currentView} 
            Actions={Actions} 
            selectList={selectList}
            deleteSelectList={deleteSelectList}/>
        }
        else {
            if(itemGroup[currentSelect])
            return itemGroup[currentSelect].person.map((item) => {
                const person1={
                    name:person[item].name,
                    mid:person[item].mid,
                    substitute:person[item].substitute,
                comment:person[item].comment,
                }
                return <ButtonList 
                person={person1} 
                currentView={currentView} 
                Actions={Actions}
                selectList={selectList}
            deleteSelectList={deleteSelectList}/>
            })
        }
    }


    render(){
        const { entities, departmentInfo,Actions } = this.props
        let { currentSelect, filterHandleLoad,currentView,selectList,deleteSelectList } = departmentInfo
        const { person,itemGroup } = entities
        return(
            <div className="flex authorityManagement_box_right">
                <div className="searchBox">
                    <Search
                        placeholder="Mid"
                        enterButton="搜索"
                        size="small"
                        className="search1"
                        onSearch={value => {
                            const { Actions } = this.props
                            Actions.filterHandleLoad(value)
                            }
                        }
                    />
                </div>
                <div className="MessageBox">
                    {this.renderBtn(person,itemGroup,Actions,currentSelect, filterHandleLoad,currentView,selectList,deleteSelectList)}
                </div>
            </div>
        )
    }
}