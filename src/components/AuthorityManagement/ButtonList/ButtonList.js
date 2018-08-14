import { Button } from 'antd';
import React, { Component } from 'react';
import './ButtonList.css';


export default class ButtonWrap extends Component {
    onClick = () => {
        const { person, type, Actions,selectList,deleteSelectList } = this.props
        if (type != 'result') {
            const data = person.mid
            const flag=selectList.indexOf(data)
            if (flag == -1) {
                Actions.addselect(data)
            }
            else {
                Actions.deleteselect(data)
            }
        }
        if (type == 'result') {
            const data = person.mid
            const flag=deleteSelectList.indexOf(data)
            if (flag == -1) {
                Actions.addDeleteselect(data)
            }
            else {
                Actions.deleteDeleteselect(data)
            }
        }
    }
    getType=()=>{
        const { person, type,selectList,deleteSelectList } = this.props
        if (type != 'result') {
            const data = person.mid
            const flag=selectList.indexOf(data)
            if (flag == -1) {
               return ''
            }
            else {
                return 'primary'
            }
        }
        if (type == 'result') {
            const data = person.mid
            const flag=deleteSelectList.indexOf(data)
            if (flag == -1) {
                return ''
            }
            else {
                return 'primary'
        }
    }
}
    render() {
        const { person, currentView, type} = this.props
        return (
            <div  onClick={this.onClick}>
                <Button
                className="buttonlist"
                    disabled={person[currentView] == 1 && type != 'result'}
                    type={this.getType()}>
                    <span>{person.name}</span> mid: {person.mid}
                </Button>
            </div>
        )
    }
}