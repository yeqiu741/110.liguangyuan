import React,{Component} from 'react'
import './ImgList.css'

export default class ImgList extends Component{

    render(){
        const{item}=this.props
        return(
            <div className="imgBox"><img src={item} alt="图片加载失败！" /></div>
        )
    }
}