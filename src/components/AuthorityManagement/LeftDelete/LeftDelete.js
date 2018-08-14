import React,{Component} from 'react'
import {Input} from 'antd'
import ButtonList from '../ButtonList/ButtonList'
const Search = Input.Search

export default class LeftDelete extends Component{

    renderBtn = (currentView, title, filterHandleResult, selectList, deleteSelectList,Actions,person) => {
       
        filterHandleResult = Number(filterHandleResult)
        if (filterHandleResult != '' && title[currentView].person.indexOf(filterHandleResult) != -1) {
            const person1 = {
                name: person[filterHandleResult].name,
                mid: person[filterHandleResult].mid,
                substitute: person[filterHandleResult].substitute,
                comment: person[filterHandleResult].comment,
            }
            return <ButtonList
                person={person1}
                currentView={currentView}
                type='result'
                Actions={Actions}
                selectList={selectList}
                deleteSelectList={deleteSelectList} />
        }
        else {
            return title[currentView].person.map((item) => {
                const person1 = {
                    name: person[item].name,
                    mid: person[item].mid,
                    substitute: person[item].substitute,
                    comment: person[item].comment,
                }
                return <ButtonList
                    person={person1}
                    currentView={currentView}
                    type='result'
                    Actions={Actions}
                    selectList={selectList}
                    deleteSelectList={deleteSelectList} />
            })
        }
    }

    deleteperson = () => {
        const { Actions,departmentInfo } = this.props
        const { currentView, deleteSelectList } = departmentInfo
        const data = {
            currentView,
            deleteSelectList
        }
        Actions.deleteperson(data)
    }
    render(){
        const { entities, departmentInfo, Actions } = this.props
        let { currentView, title, filterHandleResult, selectList, deleteSelectList } = departmentInfo
        console.log(this.props)
        const { person } = entities
        return(
            <div className="flex authorityManagement_box_left">
                <div className="authorityManagement_box_left_top">
                    <button className="button" onClick={this.deleteperson}>删除</button>
                    <Search
                        placeholder="Mid"
                        enterButton="搜索"
                        size="small"
                        className="search"
                        onSearch={value => 
                            {  
                                const { Actions } = this.props
                                Actions.filterHandleResult(value)
                            }
                        }
                    />
                </div>

                <div className="MessageBox">
                    {this.renderBtn(currentView, title, filterHandleResult, selectList, deleteSelectList,Actions,person)}
                </div>
            </div>
        )
    }
}