import React,{Component} from 'react'
import NotReviewList from '../NotReviewList/NotReviewList';



export default class NotReview extends Component{

    renderAllNotReviewList = (data) =>{
       const rnrl = (data||[]).map((item ,idx)=>{
           return <NotReviewList key={idx} item={item} />
       });
       return rnrl; 
    }
    
 
    render(){
        const {allNotReviewList} = this.props;
        console.log(this.props)
        console.log(allNotReviewList)
        const data = allNotReviewList.data;
        return(
            <ul >
                {this.renderAllNotReviewList(data)}
            </ul>
        )
        
    }
}