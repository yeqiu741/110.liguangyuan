import React,{Component} from 'react'
import {Tree} from 'antd'
 
const TreeNode = Tree.TreeNode;



export default class MiddleTree extends Component{
    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys,info)
        const {Actions}=this.props;
        Actions.filterHandleLoad('')
        Actions.changeCurrentSelect(Number(selectedKeys[0]))
      }
    render(){
        const { departmentInfo,entities } = this.props;
        const {blocResult}=departmentInfo;
        const {aiQiDi,guangZhou,department,itemGroup}=entities
        const tree=blocResult.map((item)=>{
            return (<TreeNode title={aiQiDi[item].name} key={aiQiDi[item].id}>
                        {aiQiDi[item].guangZhou?aiQiDi[item].guangZhou.map((item)=>{
            return (<TreeNode title={guangZhou[item].name} key={guangZhou[item].id}>
                        {guangZhou[item].department?guangZhou[item].department.map((item)=>{
            return (<TreeNode title={department[item].name} key={department[item].id}>
                        {department[item].itemGroup?department[item].itemGroup.map((item)=>{
            return (<TreeNode title={itemGroup[item].name} key={itemGroup[item].id}>
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        }):''}
                    </TreeNode>)
        })
        return(
            <div className='flex authorityManagement_box-middle'>
                <Tree
                    showLine
                    defaultExpandedKeys={['100001']}
                    onSelect={this.onSelect}
                >
                    <TreeNode title="所有部门" key="treeRoot">
                    {tree}
                    </TreeNode>
                </Tree>
            </div>
        )
    }
}
