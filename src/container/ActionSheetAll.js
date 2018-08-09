import React from 'react';
import ActionSheet from '../component/components/ActionSheet/ActionSheet';

export default class DemoExample extends React.Component {
    state={
      isActionSheetActive:false,
      title:'',
      menu:[],
      type:''
    }
    handleShowActionSheet=()=>{
        this.setState({
            isActionSheetActive:true,
            title:'iOS ActionSheet',
            menu:[{
                title:'IOS菜单一',
                click:()=>console.log('IOS菜单一')
            },{
                title:'IOS菜单二',
                click:()=>console.log('IOS菜单二')
            }],
            type:'iOS'
        })
    }
    handleShowActionSheet1=()=>{
        this.setState({
            isActionSheetActive:true,
            title:'Android ActionSheet',
            menu:[{
                title:'Andoraid菜单一',
                click:()=>console.log('Andoraid菜单二')
            },{
                title:'Andoraid菜单二',
                click:()=>console.log('Andoraid菜单二 ')
            }],
            type:"Android"
        })
    }
    handleHideActionSheet=()=>{
        this.setState({
            isActionSheetActive:false
        })
    }
    render(){
        return(
            <div>
              <button onClick={this.handleShowActionSheet}>Android ActionSheet</button><br />
              <button onClick={this.handleShowActionSheet1}>iOS ActionSheet</button>
              <ActionSheet 
              isActive={this.state.isActionSheetActive}
              title={this.state.title}
              menu={this.state.menu}
              onCancel={this.handleHideActionSheet}
              type={this.state.type}
              />
            </div> 
        );
    }
}
